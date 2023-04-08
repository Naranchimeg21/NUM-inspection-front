import { Box } from "@mui/material";
import { Button, Form, Input } from "antd";
import { useState } from "react";

const Step1 = () => {
  const [state, setState] = useState();

  return (
    <Box display="flex">
      <Form.Item label="Асуулт">
        <Input placeholder="Хэзээнээс зовиур илэрсэн бэ?" />
      </Form.Item>
      <Form.Item label="Хариулт">
        <Input placeholder="Өчигдөр оройноос" />
      </Form.Item>
      <Button>Нэмэх</Button>
    </Box>
  );
};

export default Step1;
