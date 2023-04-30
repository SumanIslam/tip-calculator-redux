import { connect } from "react-redux"
import type { IStore } from "../store/types"

import { MenuItems } from "../components/MenuItems"

const mapStateToProps = (state: IStore) => {
  return {
    items: state.items
  }
}

export const MenuItemsContainer = connect(mapStateToProps)(MenuItems);