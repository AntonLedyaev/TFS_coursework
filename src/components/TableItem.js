import React from 'react';
import styles from "../styles/HistoryTable.module.css";
import DeleteButton from "../decorators/DeleteButton";

const TableItem = (props) => {
  return (
    <tr className={styles.TableRow}>
      <td className={styles.TableItem}>{new Date(props.id).toLocaleDateString('ru-RU')}</td>
      <td className={styles.TableItem}>{props.value}кг</td>
      <td className={styles.TableItem}>Тут должен быть прогрессбар</td>
      <td className={styles.TableItemButton}><DeleteButton onClick = {()=> {
        props.removeWeight(props.id);
      }}/></td>
    </tr>
  );
};

export default TableItem;