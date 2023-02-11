import React from 'react'
import PageSectionHead from '../PageSectionHead/PageSectionHead'
import { PositionTakingTableHeaderWithCopy, PositionTakingTableWithCopy } from './PositionTakingTables'

const GameProvider = () => {
  return (
    <>
      <div>
        <PageSectionHead title='Position taking' />
        <PositionTakingTableHeaderWithCopy />
        <PositionTakingTableWithCopy title={'WAN MEI:'} />
      </div>
    </>
  )
}

export default GameProvider
