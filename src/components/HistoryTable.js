import React from 'react';
import styles from '../styles/HistoryTable.module.css'
import DeleteButton from "../decorators/DeleteButton";
import TableItem from "./TableItem";
const HistoryTable = (props) => {
  return (
      <table className={styles.Table}>
        <tbody>
          <tr className={styles.TableHeader}>
            <td className={styles.TableHeaderItem}>Дата</td>
            <td className={styles.TableHeaderItem}>Вес</td>
            <td className={styles.TableHeaderItem}>Начальный вес: {props.initialWeight}кг Желаемый вес: {props.wantedWeight} кг</td>
          </tr>
          {props.weightHistory.map(weight=>
            <TableItem
              id = {weight.id}
              value ={weight.value}
              key = {weight.id + weight.value}
              removeWeight = {props.removeWeight}
              wantedWeight = {props.wantedWeight}
              initialWeight = {props.initialWeight}
            />
          )}


        </tbody>
      </table>
  );
};

/*

{weightHistory.map((weight) =>
            <TableItem removeWeight = {removeWeight} weight = {weight} key = {weight.id + weight.value}/>
          )}
 */

export default HistoryTable;