import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

export default function Table({ geneData }) {
  return (
    <table className='table-fixed min-w-full divide-y divide-gray-200 '>
      <thead>
        <tr>
          <th className='p-2 text-start text-xs font-medium text-gray-500 uppercase'>Gene</th>
          <th className='p-2 text-start text-xs font-medium text-gray-500 uppercase'>Exper rep 1</th>
          <th className='p-2 text-start text-xs font-medium text-gray-500 uppercase'>Exper rep 2</th>
          <th className='p-2 text-start text-xs font-medium text-gray-500 uppercase'>Exper rep 3</th>
          <th className='p-2 text-start text-xs font-medium text-gray-500 uppercase'>Contorl rep 1</th>
          <th className='p-2 text-start text-xs font-medium text-gray-500 uppercase'>Contorl rep 2</th>
          <th className='p-2 text-start text-xs font-medium text-gray-500 uppercase'>Contorl rep 3</th>
          <th className='p-2 text-start text-xs font-medium text-gray-500 uppercase'></th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200 '>
        {geneData.map((gene) => (
          <tr key={gene.gene} className='hover:bg-gray-100 '>
            <td className='p-2 text-sm font-medium text-gray-800 '>{gene.gene}</td>
            <td className='p-2 text-sm text-gray-800 '>{gene.exper_rep1}</td>
            <td className='p-2 text-sm text-gray-800 '>{gene.exper_rep2}</td>
            <td className='p-2 text-sm text-gray-800 '>{gene.exper_rep3}</td>
            <td className='p-2 text-sm text-gray-800 '>{gene.control_rep1}</td>
            <td className='p-2 text-sm text-gray-800 '>{gene.control_rep2}</td>
            <td className='p-2 text-sm text-gray-800 '>{gene.control_rep3}</td>

            <td className='p-2 text-end text-sm font-medium'>
              <button
                type='button'
                className='inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'>
                Analysis
                <FontAwesomeIcon className={`text-blue-600`} icon={faChartBar} onClick={() => removePill(gene)} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
