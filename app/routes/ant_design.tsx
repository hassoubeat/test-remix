import { Link } from "@remix-run/react";
import { Button } from 'antd';
import styles from '~/styles/ant_design.module.css';

export default function Index() {
  return (
    <>
      <h1>Test AntDesign</h1>
      <Button type="primary">test</Button>
      <Button type="primary" className={styles.blue}>test</Button>
      <div>
        <Link to="/">to top</Link>
      </div>
    </>
  );
}
