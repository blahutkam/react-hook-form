import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: "center",
    fontSize: "40px",
    color: "deeppink",
    textShadow: "1px 1px darkmagenta",
  },
}));

export const Header = () => {
  //useStyles hook
  const styles = useStyles();

  return (
    <>
      <Typography className={styles.root} component="h1">
        The Ultimate Form
      </Typography>
    </>
  );
};
