import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function InputPills({ onSearch }) {
  const [inputValue, setInputValue] = useState('');
  const [geneNames, setGeneNames] = useState([
    { id: 0, name: 'Col6a2' },
    { id: 1, name: 'Gm5434' },
  ]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue) {
      setGeneNames([...geneNames, { id: geneNames.length, name: inputValue }]);
      setInputValue('');
    }
  };

  const removePill = (gene) => {
    const newNames = [...geneNames];
    newNames.splice(
      newNames.findIndex((i) => i.id === gene.id && i.name === gene.name),
      1
    );
    setGeneNames(newNames);
  };

  const handleSearch = () => {
    onSearch(geneNames);
    setGeneNames([]);
  };

  return (
    <div className={`group relative w-full `}>
      <label
        htmlFor='1'
        className={`block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400`}>
        Gene Names
      </label>
      <div className={`flex gap-2 justify-between mb-2`}>
        <input
          id='1'
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={`peer h-10 flex-1 rounded-md bg-gray-50 px-4 font-thin ring-1 ring-gray-200 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-blue-50/70 focus:ring-2  focus:ring-blue-400 placeholder:text-sm`}
        />
        <button
          disabled={geneNames.length === 0}
          className='w-20 bg-blue-500 text-white font-thin text-sm rounded-lg h-10 disabled:bg-gray-500 disabled:text-white disabled:cursor-not-allowed'
          onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className={`pills flex flex-wrap gap-2`}>
        {geneNames.map((gene) => (
          <span
            key={JSON.stringify(gene)}
            className={`inline-flex px-1  rounded-full bg-white border border-gray-300 items-center gap-x-2`}>
            {gene.name}
            <FontAwesomeIcon
              className={`text-gray-700/80 hover:text-red-500 text-lg`}
              icon={faTimesCircle}
              onClick={() => removePill(gene)}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
