import { useEntries } from '../../context/PlannerContext';
import styles from './Header.css';

export default function Header() {
  const { entries } = useEntries();
  return (
    <header className={styles.header}>
      <h2>My Planner</h2>
      <span>
        You have <strong>{entries.length}</strong> items in your planner.
      </span>
    </header>
  );
}
