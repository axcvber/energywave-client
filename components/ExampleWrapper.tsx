import React, { useMemo } from 'react'
import { FixedSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'

export function ExampleWrapper({ hasNextPage, isNextPageLoading, items, loadNextPage }: any) {
  const itemCount = hasNextPage ? items.length + 1 : items.length
  console.log('rerender')

  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage
  // const isItemLoaded = (index: number) => !hasNextPage || index < items.length

  const isItemLoaded = useMemo(
    () => (index: number) => !hasNextPage || index < items.length,
    [hasNextPage, items.length]
  )

  const Item = ({ index, style }: any) => {
    let content
    if (!isItemLoaded(index)) {
      content = 'Loading...'
    } else {
      content = items[index].label
    }

    return (
      <div
        style={{
          ...style,
        }}
      >
        {content}
      </div>
    )
  }

  return (
    <InfiniteLoader isItemLoaded={isItemLoaded} itemCount={itemCount} loadMoreItems={loadMoreItems}>
      {({ onItemsRendered, ref }) => (
        <List
          overscanCount={4}
          style={{
            position: 'abolute',
            height: '150px',
            width: '300px',
            overflow: 'auto',
            // background: 'blue',
            minHeight: '100%',
          }}
          className='List'
          height={150}
          itemCount={itemCount}
          itemSize={30}
          onItemsRendered={onItemsRendered}
          useIsScrolling
          ref={ref}
          width={300}
          onScroll={() => {
            console.log('onScroll')
          }}
        >
          {Item}
        </List>
      )}
    </InfiniteLoader>
  )
}

export const MemoExampleWrapper = React.memo(ExampleWrapper)
