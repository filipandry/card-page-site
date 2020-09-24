import React, { useState } from "react";
import { useStyles } from "./Style";
import { IPage, ICardProps } from "../../interfaces";
import classNames from "classnames";

const Card = (props: ICardProps) => {
  const classes = useStyles(props);
  const { Pages } = props;
  const [page, setPage] = useState(0);
  const [oldPage, setOldPage] = useState<IPage | null>(null);
  const [newPage, setNewPage] = useState(Pages[0]);
  const [animateBackground, setAnimateBackground] = useState(false);
  const [animateContent, setAnimateContent] = useState(false);
  const [toLeft, setToLeft] = useState(false);
  const [toRight, setToRight] = useState(false);
  const nextPage = () => {
    if (page >= Pages.length - 1 || animateContent || !!oldPage) {
      return;
    }
    setOldPage(newPage);
    setNewPage(Pages[page + 1]);
    setToRight(true);
    setTimeout(() => {
      setAnimateBackground(true);
      setTimeout(() => {
        setAnimateContent(true);
        setTimeout(() => {
          setPage(page + 1);
          setToRight(false);
          setOldPage(null);
          setAnimateBackground(false);
          setAnimateContent(false);
        }, 500);
      }, 300);
      setTimeout(() => {}, 500);
    }, 10);
  };
  const previousPage = () => {
    if (page === 0 || animateContent || !!oldPage) {
      return;
    }
    setOldPage(newPage);
    setNewPage(Pages[page - 1]);
    setToLeft(true);
    setTimeout(() => {
      setAnimateBackground(true);
      setTimeout(() => {
        setAnimateContent(true);
        setTimeout(() => {
          setPage(page - 1);
          setToLeft(false);
          setOldPage(null);
          setAnimateBackground(false);
          setAnimateContent(false);
        }, 500);
      }, 300);
      setTimeout(() => {}, 500);
    }, 10);
  };
  return (
    <>
      <div
        className={classNames("", {
          [classes.background]: oldPage === null,
          [classes.backgroundNewLeft]: oldPage !== null && toLeft,
          [classes.backgroundNewRight]: oldPage !== null && toRight,
          [classes.animateLeft]: animateBackground && toLeft,
          [classes.animateRight]: animateBackground && toRight
        })}
      >
        {newPage.Background}
      </div>
      {oldPage && (
        <div
          className={classNames("", {
            [classes.backgroundOld]: oldPage !== null,
            [classes.animateOldLeft]: animateBackground && toLeft,
            [classes.animateOldRight]: animateBackground && toRight
          })}
        >
          {oldPage.Background}
        </div>
      )}
      <div className={classes.root}>{oldPage?.Content || newPage.Content}</div>
      <span className={classes.previous} onClick={previousPage}>
        PREVIOUS
      </span>
      <span className={classes.next} onClick={nextPage}>
        NEXT
      </span>
    </>
  );
};
export default Card;
