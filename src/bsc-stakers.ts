import { BigInt, store } from "@graphprotocol/graph-ts"
import {
  Staked as StakedEvent,
  Withdrawn as WithdrawnEvent
} from "../generated/BSCStakers/BSCStakers"
import { Staked, Withdrawn } from "../generated/schema"

const ZERO = BigInt.fromI32(0);

export function handleStaked(event: StakedEvent): void {
  let staker = Staked.load(event.params.user);

  if(!staker) {
    staker = new Staked(event.params.user);
    staker.id = event.params.user;
    staker.user = event.params.user;
    staker.amount = ZERO;
    staker.totalDeposited = ZERO;
    staker.totalWithdrawn = ZERO;
    staker.currentStakedAmount = ZERO;
  }

  staker.totalDeposited = staker.totalDeposited.plus(event.params.amount);
  staker.currentStakedAmount = staker.currentStakedAmount.plus(event.params.amount);

  staker.save();
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let staker = Staked.load(event.params.user);

  if(!staker){
    return;
  }

  staker.totalWithdrawn = staker.totalWithdrawn.plus(event.params.amount);
  staker.currentStakedAmount = staker.currentStakedAmount.minus(event.params.amount);
  
  staker.save()
}
