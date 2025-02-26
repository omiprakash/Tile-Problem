'use client'

import { useState } from "react"

/**
 * Tile component renders a grid of alphabetic tiles that can be clicked.
 * When clicked, a tile's letter is added to the output display. If the
 * same tile is clicked consecutively more than twice, the last two
 * occurrences are replaced with an underscore ('_').
 *
 * Uses React's useState hook to manage the state of the pressed keys.
 * 
 * @returns JSX.Element - The rendered tile grid component.
 */

const Tile = () => {
  const [pressedKey, setPressedKey] = useState('')
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const strArr = str.split('')

  const onTileClick = (key: string) => {
    if (pressedKey.length >= 2) {
      const lastThreeChar = pressedKey?.slice(-2).split('')
      let test = lastThreeChar.every(itm => itm === key) ? pressedKey.slice(0, -2) + '_' : pressedKey + key
      setPressedKey(test)
    } else {
      pressedKey.length === 0 ? setPressedKey(key) : setPressedKey(pressedKey + key);
    }
  }
  return (
    <div className="flex flex-wrap p-6 max-w-[800px] mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div>
        <h1 className="text-black font-semibold">Tile Problem</h1>
      </div>
      <div className="flex flex-wrap cursor-pointer">
        {strArr.map((itm) => {
          return (
            <div className="flex items-center justify-center flex-wrap w-[50px] h-[50px] bg-white rounded m-5 border " onClick={() => { onTileClick(itm) }}>
              <p className="text-black">{itm}</p>
            </div>
          )
        })
        }
      </div>
      <div className="flex flex-grow  bg-white border rounded-md p-2 text-black min-h-10 ">
        <span className="pr-4 text-gray-500">Output:</span>
        {pressedKey}
      </div>
    </div>
  )
}

export default Tile