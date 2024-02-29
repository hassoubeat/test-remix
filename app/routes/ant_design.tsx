import { Link } from "@remix-run/react";
import { Button } from 'antd';

export default function Index() {
  return (
    <>
      <h1>Test AntDesign</h1>
      <Button type="primary">test</Button>
      <div>
        <Link to="/">to top</Link>
      </div>
    </>
  );
}
