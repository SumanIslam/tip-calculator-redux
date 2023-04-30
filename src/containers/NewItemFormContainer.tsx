import { connect } from "react-redux";
import NewItemForm from "../components/NewItemForm";
import { addMenuItem } from "../store/items/actions";

const mapDispatchToProps = {
  addMenuItem,
}

export const NewItemFormContainer = connect(null, mapDispatchToProps)(NewItemForm);