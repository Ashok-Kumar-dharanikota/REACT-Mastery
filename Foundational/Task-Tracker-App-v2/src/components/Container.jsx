import React from 'react'
import { DndContext, KeyboardSensor, PointerSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core';

const Container = () => {

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  )

  return (
    <div className=' grid grid-cols-3 gap-6'>

      <DndContext sensors={sensors} collisionDetection={closestCorners}>
      </DndContext>

    </div>
  )
}

export default Container