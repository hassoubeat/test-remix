import { Link } from "@remix-run/react";
import { useState, useCallback } from "react";
import { Button, Flex, DatePicker, theme } from "antd";
import { GithubOutlined, AmazonOutlined, DockerOutlined } from "@ant-design/icons";

import { ModalSet } from "~/components/ant_design/ModalSet";
import styles from "~/styles/ant_design.module.css";

const { useToken } = theme;

const useEnhancer = () => {
  // useTokenを使って現在のテーマのカラーセットにアクセスできる
  const { token } = useToken();
  console.log(token.colorPrimary);

  const [isLoading, updateIsLoading] = useState(true);

  const onChangeDatePicker = useCallback((date: Date, dateString: string | string[]) => {
    console.log(date, dateString);
  }, []);

  setTimeout(() => {
    updateIsLoading(false);
  }, 3000);

  return { isLoading, onChangeDatePicker }
}

export default function Index() {
  const { isLoading, onChangeDatePicker } = useEnhancer();

  return (
    <>
      <h1>Test AntDesign</h1>
      <Flex vertical gap={8}>
        <Flex wrap={"wrap"} gap={8}>
          <Button type="primary">primary</Button>
          <Button>default</Button>
          <Button type="dashed">dash</Button>
          <Button type="text">text button</Button>
          <Button type="link">link button</Button>
          <Button type="primary" loading={isLoading}>loading</Button>
          <Button type="primary" className={styles.blue}>css override</Button>
        </Flex>
        <Flex gap={8}>
          <GithubOutlined className={styles.icon} />
          <AmazonOutlined className={styles.icon} />
          <DockerOutlined className={styles.icon} />
        </Flex>
        <Flex vertical gap={8}>
          Please check console log
          <DatePicker onChange={onChangeDatePicker} />
          <DatePicker onChange={onChangeDatePicker} picker="week" />
          <DatePicker onChange={onChangeDatePicker} picker="month" />
          <DatePicker onChange={onChangeDatePicker} picker="quarter" />
          <DatePicker onChange={onChangeDatePicker} picker="year" />
        </Flex>
        <Flex gap={8}>
          <ModalSet />
        </Flex>
      </Flex>
      <div>
        <Link to="/">to top</Link>
      </div>
    </>
  );
}
