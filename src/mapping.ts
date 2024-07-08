import { SetVestingAmountsCall } from "../generated/TokenVesting/TokenVesting";
import { User } from "../generated/schema";

export function handleSetVestingAmounts(call: SetVestingAmountsCall): void {
  for (let i = 0; i < call.inputs._receivers.length; i++) {
    let user = User.load(call.inputs._receivers[i].toHexString());
    if (user == null) {
      user = new User(call.inputs._receivers[i].toHexString());
    }
    user.amount = call.inputs._amounts[i];
    user.save();
  }
}
