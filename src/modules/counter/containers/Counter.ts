import { connect } from "react-redux";
import { bindActionCreators as bind, Dispatch } from "redux";

import { State } from "@/types";
import { increment } from "@/modules/counter";
import { Counter as Component } from "@/components/Counter";

const props = ({ counter: { count } }: State) => ({ count });
const actions = (d: Dispatch) => bind({ increment }, d);
export const Counter = connect(props, actions)(Component);
