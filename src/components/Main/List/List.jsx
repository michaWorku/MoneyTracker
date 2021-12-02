import React from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, Edit, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles";
import { useGlobalContext } from "../../../context/context";

const List = () => {
  const {
    transactions,
    editTransaction,
    deleteTransaction,
    setAlertType,
    setOpen,
  } = useGlobalContext();
  const classes = useStyles();

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount}-${transaction.date}`}
            ></ListItemText>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit">
                <Edit
                  onClick={() => {
                    editTransaction(transaction.id);
                    setAlertType("EDIT");
                  }}
                />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <Delete
                  onClick={() => {
                    deleteTransaction(transaction.id);
                    setAlertType("DELETE");
                    setOpen(true);
                  }}
                />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
