import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Loader } from '../../components/Loader/Loader';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { ContainerLimiter } from '../../components/containerLimiter/ContainerLimiter';
import { InputMask } from 'primereact/inputmask';
import {
  DeliveryBox,
  Form,
  FlexContainer,
  StyledSelect,
  GeoIcon,
} from './Delivery.styled';
import { InvoiceInfo } from '../../components/InvoiceInfo/InvoiceInfo';
import sprite from '../../images/sprite.svg';
import { Good } from '../../../@types/custom';
import {
  fetchNPAreas,
  fetchNPSettlements,
  fetchNPWarehouses,
} from '../../api/api';
import { reactSelectStyle, checkLocalStorage } from '../../utils';

type InputObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  name?: string;
};

type NPItemObject =
  | {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Ref?: string;
      Description: string;
    }
  | undefined;

const Delivery = () => {
  const navigate = useNavigate();
  const warehouseError = 'У цьому населенному пункті не має відділень';

  let goodsInCart: { id: number; amount: number }[] = [];

  const [isLoading, setIsLoading] = useState(false);

  const [delivery, setDelivery] = useState<InputObject>();

  const regionsOptions = checkLocalStorage('regionsOptions', []);
  const cityOptions = checkLocalStorage('cityOptions', []);
  const officeOptions = checkLocalStorage('officeOptions', []);

  const deliveryData = checkLocalStorage('delivery', {});
  const c = deliveryData?.city;
  c.Description = c.value;
  const o = deliveryData?.office?.value;

  const [areasUkr, setAreasUkr] =
    useState<{ Description: string }[]>(regionsOptions);
  const [settlements, setSettlements] = useState<[]>(cityOptions);
  const [warehouses, setWarehouses] = useState(
    officeOptions === 404 ? [] : officeOptions,
  );
  const [city, setCity] = useState<NPItemObject>(c);
  const [office, setOffice] = useState<NPItemObject>(o);
  // console.log(warehouses);
  console.log(checkLocalStorage('delivery', {})?.city?.value, 'office');

  async function getNPAreas() {
    try {
      setIsLoading(true);
      const data = await fetchNPAreas();
      setAreasUkr(data);
      localStorage.setItem('regionsOptions', JSON.stringify(data));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function getNPSettlements(Ref: string) {
    try {
      setIsLoading(true);
      const data = await fetchNPSettlements(Ref);
      setSettlements(data);

      localStorage.setItem('cityOptions', JSON.stringify(data));
      if (
        !data.some(
          (el: NPItemObject) => el?.Description === delivery?.city?.value,
        )
      ) {
        setCity(undefined);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function getNPWarehouses(Ref: string) {
    try {
      setIsLoading(true);
      const data = await fetchNPWarehouses(Ref);
      setWarehouses(data === 404 ? [data] : data);
      localStorage.setItem('officeOptions', JSON.stringify(data));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const deliveryData = checkLocalStorage('delivery', {});
    setDelivery(deliveryData);
  }, []);

  if (localStorage.getItem('cart')) {
    goodsInCart = JSON.parse(localStorage.getItem('cart') as string);
    if (goodsInCart.length === 0) {
      navigate('/cart');
    }
  } else {
    navigate('/cart');
  }

  let goods: [] = [];

  goods = checkLocalStorage('goods', []);

  const goodsInCartArray = goods.filter(
    (el: { id: number; quantity: number }) =>
      goodsInCart.some((item) => {
        if (el.id === item.id) {
          el.quantity = item.amount;
          return true;
        } else return false;
      }),
  );

  const [inCart] = useState<Good[]>(
    goodsInCartArray.filter((el: { id: number }) => el.id !== 0),
  );

  function submitHandle(e: React.FormEvent) {
    e.preventDefault();

    if (delivery?.city && warehouses.length > 0 && warehouses[0] === 404) {
      return;
    }
    // const target = e.target as HTMLFormElement;
    // const elementsCollection =
    //   target.elements as HTMLCollectionOf<HTMLInputElement>;
    // const elements = Array.from(elementsCollection).filter(
    //   (el) => el.value !== '',
    // );

    // type dataObject = {
    //   [key: string]: string | undefined;
    // };

    // const data: dataObject = {};

    // elements.map((el) => (data[el.name] = el.value));

    function updateValues(obj: InputObject): InputObject {
      const updatedObject: InputObject = {};

      for (const key in obj) {
        if (typeof obj[key] === 'object') {
          updatedObject[key] = obj[key].value;
        } else {
          updatedObject[key] = obj[key];
        }
      }

      return updatedObject;
    }

    const deliveryDataForBackend = updateValues(delivery as InputObject);

    // const deliveryDataForBackend = { ...delivery };
    // for (const key in delivery) {
    //   if (typeof delivery[key] === 'object') {
    //     deliveryDataForBackend[key] = delivery[key].value;
    //   }
    // }

    console.log('send to backend', deliveryDataForBackend);

    navigate('/payment');
    // e.form.reset();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function saveValue(e: any | string, field: string) {
    // console.log(e);
    const temp = checkLocalStorage('delivery', {});
    let newArray;
    if (typeof e === 'string') {
      newArray = { ...temp, [field]: e };
    }

    newArray = { ...temp, [field]: e };
    localStorage.setItem('delivery', JSON.stringify(newArray));

    if (field === 'country' && e.value === 'Україна' && areasUkr.length === 0) {
      getNPAreas();
    }
    if (field === 'oblast') {
      const area: NPItemObject | undefined = areasUkr.find(
        (el: NPItemObject) => el?.Description === e.value,
      );
      if (area) {
        getNPSettlements(area?.Ref as string);
      }
    }
    if (field === 'city') {
      const town: NPItemObject | undefined = settlements.find(
        (el: NPItemObject) => el?.Description === e.value,
      );
      if (town) {
        setCity(town);
        setOffice(undefined);
        getNPWarehouses(town['Ref'] as string);

        const newArray = JSON.parse(localStorage.getItem('delivery') as string);
        delete newArray.office;
        localStorage.setItem('delivery', JSON.stringify(newArray));
      }
    }
    if (field === 'office') {
      setOffice(e.value);
    }

    // if (field === 'post' && e.value === 'novaposhta') {
    //   getNPWarehouses(city.Ref);
    // }

    setDelivery(newArray);
  }

  // creating object in the form necessary for the work of the select.
  const getOptions = (labelsArray: string[], valuesArray?: string[]) =>
    labelsArray.map((item, index) => {
      return {
        value: valuesArray ? valuesArray[index] : item,
        label: item,
      };
    });

  const getOfficeOptions = (labelsArray: string[]) =>
    labelsArray.map((item) => {
      return {
        value: item,
        label: (
          <>
            <GeoIcon width={24} height={24}>
              <use href={`${sprite}#geo`} />
            </GeoIcon>
            <span>{item}</span>
          </>
        ),
      };
    });

  return (
    inCart.length > 0 && (
      <>
        {/* {isLoading && <Loader />} */}
        <PageTitle>Доставка</PageTitle>
        <ContainerLimiter paddingTopMob={'24px'} paddingTopDesc={'80px'}>
          <DeliveryBox>
            <Form onSubmit={submitHandle} id="delivery">
              <h2>Адреса доставки</h2>
              <FlexContainer>
                <label className="short">
                  Ім&apos;я
                  <input
                    placeholder="Тарас"
                    name="name"
                    type="text"
                    className="short"
                    required
                    onBlur={(e) => saveValue(e.target.value, 'name')}
                    defaultValue={delivery?.name ? delivery?.name : undefined}
                  />
                </label>
                <label className="short">
                  Прізвище
                  <input
                    placeholder="Шевченко"
                    name="surname"
                    type="text"
                    className="short"
                    required
                    onBlur={(e) => saveValue(e.target.value, 'surname')}
                    defaultValue={
                      delivery?.surname ? delivery?.surname : undefined
                    }
                  />
                </label>
                <label>
                  Служба доставки
                  <StyledSelect
                    className="react-select-container"
                    classNamePrefix="rs"
                    name={'post'}
                    placeholder={'Оберіть службу доставки'}
                    options={getOptions(
                      ['Нова Пошта (1-3 днів)', 'Укрпошта (3-12 днів)'],
                      ['novaposhta', 'ukrpost'],
                    )}
                    styles={reactSelectStyle}
                    required
                    onChange={(e) => saveValue(e as object, 'post')}
                    value={delivery?.post ? delivery?.post : undefined}
                  />
                </label>
                {delivery?.post && (
                  <label>
                    Країна
                    <StyledSelect
                      className="react-select-container"
                      classNamePrefix="rs"
                      name={'country'}
                      placeholder={'Оберіть країну'}
                      options={getOptions(['Україна', 'Польща'])}
                      styles={reactSelectStyle}
                      required
                      onChange={(e) => saveValue(e as object, 'country')}
                      value={delivery?.country ? delivery?.country : undefined}
                    />
                  </label>
                )}
                {delivery?.country?.value === 'Україна' && (
                  <label>
                    Регіон
                    <StyledSelect
                      className="react-select-container"
                      classNamePrefix="rs"
                      name={'oblast'}
                      placeholder={
                        isLoading ? 'Завантаження' : 'Оберіть регіон'
                      }
                      options={
                        delivery?.country?.value === 'Україна'
                          ? getOptions(
                              areasUkr?.map((el: { Description: string }) => {
                                return el.Description;
                              }),
                            )
                          : []
                      }
                      styles={reactSelectStyle}
                      required
                      onChange={(e) => saveValue(e as object, 'oblast')}
                      value={delivery?.oblast ? delivery?.oblast : undefined}
                    />
                  </label>
                )}
                {delivery?.country?.value === 'Україна' && delivery?.oblast && (
                  <>
                    <label>
                      Місто
                      <StyledSelect
                        className="react-select-container"
                        classNamePrefix="rs"
                        name={'city'}
                        placeholder={
                          isLoading ? 'Завантаження' : 'Оберіть місто'
                        }
                        options={
                          delivery?.oblast?.value
                            ? getOptions(
                                settlements?.map(
                                  (el: { Description: string }) => {
                                    return el.Description;
                                  },
                                ),
                              )
                            : []
                        }
                        styles={reactSelectStyle}
                        required
                        onChange={(e) => saveValue(e as object, 'city')}
                        value={city ? getOptions([city.Description]) : []}
                      />
                    </label>
                    {delivery?.city && warehouses[0] === 404 && (
                      <p className="error">
                        Оберіть населений пункт, в якому є відділення Нової
                        Пошти
                      </p>
                    )}
                  </>
                )}
                {delivery?.country?.value === 'Україна' && delivery?.city && (
                  <label>
                    Номер відділення
                    <StyledSelect
                      className="react-select-container"
                      classNamePrefix="rs"
                      name={'office'}
                      placeholder={
                        warehouses[0] === 404
                          ? warehouseError
                          : isLoading
                          ? 'Завантаження'
                          : 'Оберіть номер відділення'
                      }
                      options={
                        delivery?.post?.value === 'novaposhta' &&
                        warehouses[0] !== 404
                          ? getOfficeOptions(
                              warehouses?.map((el: { Description: string }) => {
                                return el.Description;
                              }),
                            )
                          : []
                      }
                      styles={reactSelectStyle}
                      required
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      onChange={(e: any) =>
                        saveValue(
                          {
                            value: e.value,
                            label: e.value,
                          } as object,
                          'office',
                        )
                      }
                      value={
                        office
                          ? getOfficeOptions([office as unknown as string])
                          : []
                      }
                      isDisabled={
                        !city || !delivery?.city || warehouses[0] === 404
                      }
                    />
                  </label>
                )}

                <label>
                  Вид оплати
                  <StyledSelect
                    className="react-select-container"
                    classNamePrefix="rs"
                    name={'payment'}
                    placeholder={'Оберіть вид оплати'}
                    options={getOptions(['Оплата онлайн', 'Оплата Готівкою'])}
                    styles={reactSelectStyle}
                    required
                    onChange={(e) => saveValue(e as object, 'payment')}
                    value={delivery?.payment ? delivery?.payment : undefined}
                  />
                </label>
                <label>
                  Номер телефону
                  <InputMask
                    placeholder="38067 123 4567"
                    mask="99999 999 9999"
                    name="phone"
                    type="tel"
                    required
                    onBlur={(e) => saveValue(e.target.value, 'phone')}
                    defaultValue={delivery?.phone ? delivery?.phone : undefined}
                  />
                </label>
                <label>
                  Email
                  <input
                    placeholder="myemail@gmail.com"
                    name="email"
                    type="email"
                    required
                    onBlur={(e) => saveValue(e.target.value, 'email')}
                    defaultValue={delivery?.email ? delivery?.email : undefined}
                  />
                </label>
              </FlexContainer>
              <h3>Додаткова інформація</h3>
              <label>
                Коментар щодо замовлення (не обов’язково)
                <textarea
                  placeholder="Напишіть щось"
                  name="comment"
                  onInput={(e) => {
                    const textarea = e.target as HTMLTextAreaElement;
                    saveValue(textarea.value, 'comment');
                  }}
                  defaultValue={
                    delivery?.comment ? delivery?.comment : undefined
                  }
                ></textarea>
              </label>
              <button type="submit" form="delivery" className="primaryBtn">
                продовжити
              </button>
            </Form>
            <aside>
              <InvoiceInfo inCart={inCart} />

              <button type="submit" form="delivery" className="primaryBtn">
                продовжити
              </button>
            </aside>
          </DeliveryBox>
        </ContainerLimiter>
      </>
    )
  );
};
export default Delivery;
