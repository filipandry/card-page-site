import React from "react";
import { Card } from "./components";
import { IPage } from "./interfaces/IPage";
import { useAppStyles } from "./AppStyle";
import useWindowSize from "./hooks/useWindowSize";
import {
  Page1Content,
  Page1Background,
  Page1Title,
  Page2Content,
  Page2Background,
  Page2Title,
  Page3Content,
  Page3Background,
  Page3Title,
  Page4Content,
  Page4Background,
  Page4Title
} from "./pages";

export default function App() {
  const classes = useAppStyles();
  const windowSize = useWindowSize();

  const pages: IPage[] = [
    {
      Background: <Page1Background />,
      Content: <Page1Content />,
      Title: Page1Title
    },
    {
      Background: <Page2Background />,
      Content: <Page2Content />,
      Title: Page2Title
    },
    {
      Background: <Page3Background />,
      Content: <Page3Content />,
      Title: Page3Title
    },
    {
      Background: <Page4Background />,
      Content: <Page4Content />,
      Title: Page4Title
    }
  ];

  return (
    <div className={classes.app}>
      <Card Pages={pages} WindowSize={windowSize} />
    </div>
  );
}
