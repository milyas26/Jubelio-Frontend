import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const Index = () => {
  const [selected, setSelected] = useState([]);

  const list = [];
  selected.forEach((anagram) => {
    let letters = anagram.toLowerCase().split("");
    function bubbleSort(array) {
      var done = false;
      while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
          if (array[i - 1] > array[i]) {
            done = false;
            var tmp = array[i - 1];
            array[i - 1] = array[i];
            array[i] = tmp;
          }
        }
      }

      return array;
    }
    bubbleSort(letters);
    list[letters] ? list[letters].push(anagram) : (list[letters] = [anagram]);
  });

  const keys = Object.keys(list);
  let val2 = [];
  for (let val of keys) {
    val2.push(list[val]);
  }
  return (
    <div className='container my-5'>
      <h2>ANAGRAM LOGIC TEST</h2>
      <TagsInput
        value={selected}
        onChange={setSelected}
        name='fruits'
        placeHolder='tambahkan kata'
      />
      <em>tekan enter untuk menambahkan kata</em>
      <ul class='list-group list-group-flush mt-4'>
        {val2?.map((val, index) => {
          return (
            <li class='list-group-item'>
              <span>
                {index + 1}.{" "}
                {val.map((item, i) => (
                  <span>
                    {item}
                    {i === val?.length - 1 ? "" : ", "}
                  </span>
                ))}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
