import React from 'react';
import styles from '../styles/HistoryTable.module.css'
import DeleteButton from "../decorators/DeleteButton";
const HistoryTable = () => {
  return (
      <table className={styles.Table}>

        <tbody>
          <tr className={styles.TableHeader}>
            <td className={styles.TableHeaderItem}>Дата</td>
            <td className={styles.TableHeaderItem}>Вес</td>
            <td className={styles.TableHeaderItem}>Начальный вес: 100кг Желанный вес: 70кг</td>
          </tr>
          <tr className={styles.TableRow}>
            <td className={styles.TableItem}>01.03.22</td>
            <td className={styles.TableItem}>70кг</td>
            <td className={styles.TableItem}>Тут должен быть прогрессбар</td>
            <td className={styles.TableItemButton}><DeleteButton/></td>
          </tr>
          <tr className={styles.TableRow}>
            <td className={styles.TableItem}>01.03.20</td>
            <td className={styles.TableItem}>100кг</td>
            <td className={styles.TableItem}>Тут должен быть прогрессбар</td>
            <td className={styles.TableItemButton}> <DeleteButton/></td>
          </tr>
        </tbody>
      </table>
  );
};

export default HistoryTable;