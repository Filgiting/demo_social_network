import styles from './Paginator.module.css';
import React, {useState} from 'react';

let Paginator = ({portionSize = 10, ...props}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={styles.cursorPointer}>

        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={({[styles.selectedPage]: props.currentPage === p},
                        styles.pageNumber)}
                                 key={p}
                                 onClick={(event) => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}

            { portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button> }


        </div>

    </div>
};

export default Paginator;