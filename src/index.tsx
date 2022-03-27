import jwt from "jsonwebtoken";

import { Action, ActionPanel, Clipboard, Form, showToast, Toast } from "@raycast/api";

type JWTEncodeBody = {
  payload: string,
  secret: string,
  expirationTime: string,
}

export default function Command() {
  return (
    <Form actions={
      <ActionPanel>
        <ShareJWTAction />
      </ActionPanel>
    }>
      <Form.TextArea
        id="payload"
        title="Payload"
        placeholder="Enter JWT payload"
      />
      <Form.TextField id="secret" title="Secret" placeholder="Enter Secret" />
    </Form>
  );
}

function ShareJWTAction() {
  async function handleSubmit(values: JWTEncodeBody) {

    const token = jwt.sign(JSON.parse(values.payload), values.secret, {
      expiresIn: 3600
    });

    await Clipboard.copy(token);

    showToast({
      style: Toast.Style.Success,
      title: "Encoded JWT",
      message: "Copied JWT to your clipboard"
    });
  }

  return (
    <Action.SubmitForm
      title="Encode JWT"
      onSubmit={handleSubmit}
    />
  );
}
