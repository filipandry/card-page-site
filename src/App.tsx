import React from "react";
import { Card } from "./components";
import { IPage } from "./interfaces/IPage";
import { useAppStyles } from "./AppStyle";
import useWindowSize from "./hooks/useWindowSize";
import {
  Page1Content,
  Page1Background,
  Page2Content,
  Page2Background,
  Page3Content,
  Page3Background,
  Page4Content,
  Page4Background
} from "./pages";

export default function App() {
  const classes = useAppStyles();
  const windowSize = useWindowSize();

  const pages: IPage[] = [
    {
      Background: <Page1Background />,
      Content: <Page1Content />
    },
    {
      Background: <Page2Background />,
      Content: <Page2Content />
    },
    {
      Background: <Page3Background />,
      Content: <Page3Content />
    },
    {
      Background: <Page4Background />,
      Content: <Page4Content />
    }
  ];

  return (
    <div className={classes.app}>
      <Card Pages={pages} WindowSize={windowSize} />
    </div>
  );
}
