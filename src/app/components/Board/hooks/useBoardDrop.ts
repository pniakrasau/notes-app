import { useDrop } from 'react-dnd';
import type { ConnectDropTarget } from 'react-dnd/src/types';

import type { DragType } from '~/notes/constants/draggable.constans';
import { NOTE_CARD_DRAGGABLE } from '~/notes/constants/draggable.constans';

export function useBoardDrop(): ConnectDropTarget {
  const [, dropRef] = useDrop<DragType, void>({
    accept: [NOTE_CARD_DRAGGABLE],
  });

  return dropRef;
}
