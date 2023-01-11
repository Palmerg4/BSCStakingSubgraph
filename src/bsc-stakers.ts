import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  RewardPaid as RewardPaidEvent,
  RewardRestaked as RewardRestakedEvent,
  RewardTokensRecovered as RewardTokensRecoveredEvent,
  RewardsSet as RewardsSetEvent,
  Staked as StakedEvent,
  Unpaused as UnpausedEvent,
  Withdrawn as WithdrawnEvent
} from "../generated/BSCStakers/BSCStakers"
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
} from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardPaid(event: RewardPaidEvent): void {
  let entity = new RewardPaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reward = event.params.reward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardRestaked(event: RewardRestakedEvent): void {
  let entity = new RewardRestaked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reward = event.params.reward
  entity.stakingTokens = event.params.stakingTokens

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardTokensRecovered(
  event: RewardTokensRecoveredEvent
): void {
  let entity = new RewardTokensRecovered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardsSet(event: RewardsSetEvent): void {
  let entity = new RewardsSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.rewardPerBlock = event.params.rewardPerBlock
  entity.firstBlockWithReward = event.params.firstBlockWithReward
  entity.lastBlockWithReward = event.params.lastBlockWithReward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStaked(event: StakedEvent): void {
  let entity = new Staked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let entity = new Withdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
