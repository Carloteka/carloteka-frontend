import css from './Paginator.module.css';
import { useRef } from 'react';

interface PaginatorProps {
  setCurrentPage: (_value: number) => void;
  currentPage: number;
  pageCount: number;
}

export const Paginator = ({
  setCurrentPage,
  currentPage,
  pageCount,
}: PaginatorProps) => {
  const firstBtnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const secondBtnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const thirdBtnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  function startBtnAction() {
    const firstBtn: HTMLButtonElement = firstBtnRef.current;
    firstBtn.innerText = '1';
    const secondBtn: HTMLButtonElement = secondBtnRef.current;
    secondBtn.innerText = '2';
    const thirdBtn: HTMLButtonElement = thirdBtnRef.current;
    thirdBtn.innerText = '3';
    setCurrentPage(1);
  }

  function prevBtnAction() {
    if (currentPage == +firstBtnRef.current.innerText) {
      if (currentPage === 3) {
        moreBtnAction(-2);
      } else {
        moreBtnAction(-3);
      }
    }
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  }

  function nextBtnAction() {
    if (pageCount && currentPage >= pageCount) {
      return;
    }
    if (currentPage == +thirdBtnRef.current.innerText) {
      moreBtnAction(3);
    }
    setCurrentPage(currentPage + 1);
  }

  function moreBtnAction(payload: number) {
    if (+firstBtnRef.current.innerText + payload <= pageCount || !pageCount) {
      firstBtnRef.current.innerText = (+firstBtnRef.current.innerText +
        payload) as unknown as string;
      secondBtnRef.current.innerText = (+secondBtnRef.current.innerText +
        payload) as unknown as string;
      thirdBtnRef.current.innerText = (+thirdBtnRef.current.innerText +
        payload) as unknown as string;
    } else {
      startBtnAction();
    }
  }

  function isBtnHidden(button: string) {
    let answer = 'false';

    switch (button) {
      case 'start':
        if (
          (currentPage <= 3 &&
            currentPage == +thirdBtnRef.current?.innerText) ||
          (currentPage <= 3 &&
            currentPage == +secondBtnRef.current?.innerText) ||
          currentPage < 2
        ) {
          answer = 'true';
        }
        break;

      case 'prev':
        if (
          (currentPage <= 3 &&
            currentPage == +thirdBtnRef.current?.innerText) ||
          currentPage <= 2
        ) {
          answer = 'true';
        }
        if (
          currentPage >= 2 &&
          currentPage == +firstBtnRef.current?.innerText
        ) {
          answer = 'false';
        }
        break;

      case 'more':
        if (pageCount - currentPage <= 2) {
          answer = 'true';
        }
        if (!pageCount) {
          answer = 'false';
        }
        break;

      case 'next':
        if (
          (pageCount - currentPage <= 2 &&
            currentPage == +firstBtnRef.current?.innerText) ||
          pageCount - currentPage <= 1
        ) {
          answer = 'true';
        }
        if (!pageCount) {
          answer = 'false';
        }
        break;

      case 'last':
        if (
          (pageCount - currentPage < 3 &&
            currentPage == +firstBtnRef.current?.innerText) ||
          pageCount - currentPage <= 1
        ) {
          answer = 'true';
        }
        if (!pageCount) {
          answer = 'false';
        }
        break;

      default:
        answer = 'false';
    }

    return answer;
  }

  function setPage(el: HTMLElement) {
    const pageNumber = +el.innerText;
    setCurrentPage(pageNumber);
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <ul className={css.paginator}>
      {pageCount && pageCount <= 1 ? null : (
        <>
          <li data-hidden={isBtnHidden('start')}>
            <button
              type="button"
              data-type={'styled'}
              title="to first page"
              onClick={() => {
                startBtnAction();
                window.scrollTo(0, 0);
              }}
            >
              &lt;&lt;
            </button>
          </li>

          <li data-hidden={isBtnHidden('prev')}>
            <button
              type="button"
              data-type={'styled'}
              title="previous page"
              onClick={() => {
                prevBtnAction();
                scrollToTop();
              }}
            >
              &lt;
            </button>
          </li>

          <li>
            <button
              ref={firstBtnRef}
              type="button"
              disabled={
                firstBtnRef.current
                  ? currentPage == +firstBtnRef.current.innerText
                  : true
              }
              title="first button of page navigation"
              onClick={(e) => {
                setPage(e.target as HTMLElement);
                scrollToTop();
              }}
            >
              {!firstBtnRef.current?.innerText
                ? currentPage
                : firstBtnRef.current.innerText}
            </button>
          </li>
          <li
            data-hidden={
              pageCount && pageCount < +secondBtnRef?.current?.innerText
            }
          >
            <button
              ref={secondBtnRef}
              type="button"
              disabled={currentPage == +secondBtnRef?.current?.innerText}
              title="second button of page navigation"
              onClick={(e) => {
                setPage(e.target as HTMLElement);
                scrollToTop();
              }}
            >
              {!secondBtnRef.current?.innerText
                ? currentPage + 1
                : secondBtnRef.current.innerText}
            </button>
          </li>
          <li
            data-hidden={
              pageCount && pageCount < +thirdBtnRef?.current?.innerText
            }
          >
            <button
              ref={thirdBtnRef}
              type="button"
              disabled={currentPage == +thirdBtnRef?.current?.innerText}
              title="third button of page navigation"
              onClick={(e) => {
                setPage(e.target as HTMLElement);
                scrollToTop();
              }}
            >
              {!thirdBtnRef.current?.innerText
                ? currentPage + 2
                : thirdBtnRef.current.innerText}
            </button>
          </li>
          <li data-hidden={isBtnHidden('more')}>
            <button
              type="button"
              title="show more pages"
              onClick={() => {
                moreBtnAction(+3);
                setCurrentPage(+thirdBtnRef.current.innerText - 2);
                scrollToTop();
              }}
            >
              ...
            </button>
          </li>
          <li data-hidden={isBtnHidden('next')}>
            <button
              type="button"
              data-type={'styled'}
              title="next page"
              onClick={() => {
                nextBtnAction();
                scrollToTop();
              }}
            >
              Наступна
            </button>
          </li>

          <li data-hidden={isBtnHidden('last')}>
            <button
              type="button"
              data-type={'styled'}
              title="last page"
              onClick={() => {
                firstBtnRef.current.innerText = (pageCount -
                  2) as unknown as string;
                secondBtnRef.current.innerText = (pageCount -
                  1) as unknown as string;
                thirdBtnRef.current.innerText = pageCount as unknown as string;
                setCurrentPage(pageCount);
                scrollToTop();
              }}
              disabled={!pageCount}
            >
              {pageCount}
            </button>
          </li>
        </>
      )}
    </ul>
  );
};
