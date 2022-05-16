import React, {useEffect} from 'react';
import styles from "../styles/HistoryTable.module.css";
import DeleteButton from "../decorators/DeleteButton";
import itemStyles from "../styles/TableItem.module.css"
const TableItem = (props) => {
  let maxWeight = 0;
  let currentWeight = 0
  if (Number(props.wantedWeight)<=Number(props.initialWeight)) {
    maxWeight = Math.abs(props.wantedWeight-props.initialWeight)
    currentWeight = Math.abs(props.initialWeight - props.value)
  } else {
    maxWeight = Math.abs(props.wantedWeight)
    currentWeight = Math.abs(props.value)
  }

  return (
    <tr className={styles.TableRow}>
      <td className={styles.TableItem}>{new Date(props.id).toLocaleDateString('ru-RU')}</td>
      <td className={styles.TableItem}>{props.value}кг</td>
      <td className={styles.TableItem}><progress className={itemStyles.TableItemProgress} max={maxWeight} value={currentWeight}/></td>
      <td className={styles.TableItemButton}><DeleteButton onClick = {()=> {
        props.removeWeight(props.id);
      }}/></td>
    </tr>
  );
};

export default TableItem;