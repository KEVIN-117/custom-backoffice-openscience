import Checklist from 'ui/components/atoms/Checklist/Checklist';
import styles from './InformationView.module.scss';

interface IProps {
  items: string[];
  onCheck: (item: string) => void;
  itemsFiltered: string[];
  onFilter: (item: string) => void;
}

export default function InformationView(props: IProps) {
  const { items, onCheck, itemsFiltered, onFilter } = props;

  const handleCheck = (item: string) => {
    onCheck(item);
  };

  return (
    <section className={styles.container}>
      <Checklist className={styles.container__primary} items={items} onCheck={handleCheck} />
      <Checklist className={styles.container__secondary} items={itemsFiltered} onCheck={onFilter} />
    </section>
  );
}
