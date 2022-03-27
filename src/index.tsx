import json2Md from "json2md";

import { Detail } from "@raycast/api";

export default function main() {
  const md = json2Md([
    {
      "code": {
        language: "json",
        content: JSON.stringify({ name: "Cesar", email: "john@doe.me" }, null, 2)
      }
    }
  ]);

  return <Detail markdown={md} />;
}
