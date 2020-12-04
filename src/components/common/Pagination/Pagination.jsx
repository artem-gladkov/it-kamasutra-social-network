import style from "../../Users/Users.module.css";
import {useState} from "react";

const Pagination = props => {
  let pages = []
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageUsersCount)
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  const [portionSize, setPortionSize] = useState(10)
  const [currentPortion, setCurrentPortion] = useState(1)
  const portionNumber = Math.ceil(pagesCount / portionSize)

  pages = pages.filter(page => page >= (currentPortion - 1) * portionSize + 1 && page <= currentPortion * portionSize )

  return (
    <div className={style.pagination}>
      {
        currentPortion > 1 && <button onClick={() => {
          setCurrentPortion(currentPortion - 1)
        }
        }>Prev</button>
      }

      {
        pages.map(page => {
          return (
            <div className={`${style.pagination__item} ${props.currentPage === page ? style.currentPage : ''}`}
                 onClick={(e) => {
                   props.onPageChange(page)
                 }}
                 key={page}>
              {page}
            </div>
          )
        })
      }

      {
        currentPortion < portionNumber
        && <button onClick={() => {
          setCurrentPortion(currentPortion + 1)
        }
        }>
          Next
        </button>
      }
    </div>
  )
}

export default Pagination
