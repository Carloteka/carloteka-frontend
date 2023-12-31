import css from './Paginator.module.css';
import { useRef } from 'react';

export const Paginator = ({
  setCurrentPage,
  currentPage: currPageAsString,
  pageCount,
}) => {
  const firstBtnRef = useRef();
  const secondBtnRef = useRef();
  const thirdBtnRef = useRef();

  const currentPage = +currPageAsString;

  function startBtnAction() {
    firstBtnRef.current.innerText = 1;
    secondBtnRef.current.innerText = 2;
    thirdBtnRef.current.innerText = 3;
    setCurrentPage(1);
  }

  function prevBtnAction() {
    if (currentPage == firstBtnRef.current.innerText) {
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
    if (currentPage == thirdBtnRef.current.innerText) {
      moreBtnAction(3);
    }
    setCurrentPage(currentPage + 1);
  }

  function moreBtnAction(payload) {
    if (+firstBtnRef.current.innerText + payload <= pageCount || !pageCount) {
      firstBtnRef.current.innerText = +firstBtnRef.current.innerText + payload;
      secondBtnRef.current.innerText =
        +secondBtnRef.current.innerText + payload;
      thirdBtnRef.current.innerText = +thirdBtnRef.current.innerText + payload;
    } else {
      startBtnAction();
    }
  }

  function isBtnHidden(button) {
    let answer = 'false';

    switch (button) {
      case 'start':
        if (
          (currentPage <= 3 && currentPage == thirdBtnRef.current?.innerText) ||
          (currentPage <= 3 &&
            currentPage == secondBtnRef.current?.innerText) ||
          currentPage < 2
        ) {
          answer = 'true';
        }
        break;

      case 'prev':
        if (
          (currentPage <= 3 && currentPage == thirdBtnRef.current?.innerText) ||
          currentPage <= 2
        ) {
          answer = 'true';
        }
        if (currentPage >= 2 && currentPage == firstBtnRef.current?.innerText) {
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
            currentPage == firstBtnRef.current?.innerText) ||
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
            currentPage == firstBtnRef.current?.innerText) ||
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

  return (
    <ul className={css.paginator}>
      {pageCount && pageCount <= 1 ? null : (
        <>
          <li data-hidden={isBtnHidden('start')}>
            <button
              type="button"
              data-type={'styled'}
              title="to first page"
              onClick={() => startBtnAction()}
            >
              &lt;&lt;
            </button>
          </li>

          <li data-hidden={isBtnHidden('prev')}>
            <button
              type="button"
              data-type={'styled'}
              title="previous page"
              onClick={() => prevBtnAction()}
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
                  ? currentPage == firstBtnRef.current.innerText
                  : true
              }
              title="first button of page navigation"
              onClick={(e) => setCurrentPage(+e.target.innerText)}
            >
              {firstBtnRef.current
                ? currentPage == firstBtnRef.current?.innerText
                  ? currentPage
                  : firstBtnRef.current.innerText
                : 1}
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
              disabled={currentPage == secondBtnRef?.current?.innerText}
              title="second button of page navigation"
              onClick={(e) => setCurrentPage(+e.target.innerText)}
            >
              {secondBtnRef.current
                ? currentPage == secondBtnRef.current?.innerText
                  ? currentPage
                  : secondBtnRef.current.innerText
                : 2}
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
              disabled={currentPage == thirdBtnRef?.current?.innerText}
              title="third button of page navigation"
              onClick={(e) => setCurrentPage(+e.target.innerText)}
            >
              {thirdBtnRef.current
                ? currentPage == thirdBtnRef.current?.innerText
                  ? currentPage
                  : thirdBtnRef.current.innerText
                : 3}
            </button>
          </li>
          <li data-hidden={isBtnHidden('more')}>
            <button
              type="button"
              title="show more pages"
              onClick={() => {
                moreBtnAction(+3);
                setCurrentPage(+thirdBtnRef.current.innerText - 2);
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
              onClick={() => nextBtnAction()}
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
                firstBtnRef.current.innerText = pageCount - 2;
                secondBtnRef.current.innerText = pageCount - 1;
                thirdBtnRef.current.innerText = pageCount;
                setCurrentPage(pageCount);
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
