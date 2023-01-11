import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  Paused,
  RewardPaid,
  RewardRestaked,
  RewardTokensRecovered,
  RewardsSet,
  Staked,
  Unpaused,
  Withdrawn
} from "../generated/BSCStakers/BSCStakers"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createRewardPaidEvent(
  user: Address,
  reward: BigInt
): RewardPaid {
  let rewardPaidEvent = changetype<RewardPaid>(newMockEvent())

  rewardPaidEvent.parameters = new Array()

  rewardPaidEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rewardPaidEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return rewardPaidEvent
}

export function createRewardRestakedEvent(
  user: Address,
  reward: BigInt,
  stakingTokens: BigInt
): RewardRestaked {
  let rewardRestakedEvent = changetype<RewardRestaked>(newMockEvent())

  rewardRestakedEvent.parameters = new Array()

  rewardRestakedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rewardRestakedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )
  rewardRestakedEvent.parameters.push(
    new ethereum.EventParam(
      "stakingTokens",
      ethereum.Value.fromUnsignedBigInt(stakingTokens)
    )
  )

  return rewardRestakedEvent
}

export function createRewardTokensRecoveredEvent(
  amount: BigInt
): RewardTokensRecovered {
  let rewardTokensRecoveredEvent = changetype<RewardTokensRecovered>(
    newMockEvent()
  )

  rewardTokensRecoveredEvent.parameters = new Array()

  rewardTokensRecoveredEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rewardTokensRecoveredEvent
}

export function createRewardsSetEvent(
  rewardPerBlock: BigInt,
  firstBlockWithReward: BigInt,
  lastBlockWithReward: BigInt
): RewardsSet {
  let rewardsSetEvent = changetype<RewardsSet>(newMockEvent())

  rewardsSetEvent.parameters = new Array()

  rewardsSetEvent.parameters.push(
    new ethereum.EventParam(
      "rewardPerBlock",
      ethereum.Value.fromUnsignedBigInt(rewardPerBlock)
    )
  )
  rewardsSetEvent.parameters.push(
    new ethereum.EventParam(
      "firstBlockWithReward",
      ethereum.Value.fromUnsignedBigInt(firstBlockWithReward)
    )
  )
  rewardsSetEvent.parameters.push(
    new ethereum.EventParam(
      "lastBlockWithReward",
      ethereum.Value.fromUnsignedBigInt(lastBlockWithReward)
    )
  )

  return rewardsSetEvent
}

export function createStakedEvent(user: Address, amount: BigInt): Staked {
  let stakedEvent = changetype<Staked>(newMockEvent())

  stakedEvent.parameters = new Array()

  stakedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return stakedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}

export function createWithdrawnEvent(user: Address, amount: BigInt): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawnEvent
}
