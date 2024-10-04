import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const HasilPanjar = () => {
  const { kecamatan } = useParams();
  const location = useLocation();
  const { hargaPenggugat, hargaTergugat,title,kec,kecTergugat } = location.state || {};
  const totalhargaPendaftaran = hargaPenggugat.pendaftaran + hargaPenggugat.redaksi + hargaPenggugat.materai;
  const totalHargaPenggugat = title == "istri" ? hargaPenggugat.panggilanPenggugat * 2 : hargaPenggugat.panggilanPenggugat * 3;
  const totalHargaTergugat = title == "istri" ? hargaTergugat.panggilanTergugat * 3 : hargaTergugat.panggilanTergugat * 4;
  const totalHarga = totalhargaPendaftaran + totalHargaPenggugat + totalHargaTergugat;
  useEffect(()=>{
    console.log({hargaPenggugat,hargaTergugat,title,kec,kecTergugat});
    
  },[])

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Layout>  
        <div>
        <h1 className="text-green-primary font-bold text-xl mt-6">
            Kalkulator Panjar Biaya Perkara
        </h1>
        <div className="overflow-x-auto">
  <table className="table border-none">
    {/* head */}
    <thead >
      <tr className='border-none'>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className='border-none'>
        <th className='border-none font-normal'>Biaya Pendaftaran : </th>
         <th></th>
         <th></th>
        <td  className='text-right'>{formatRupiah(hargaPenggugat.pendaftaran)}</td>
      </tr>
      {/* row 2 */}
      <tr className='border-none'>
        <th className='border-none font-normal'>Biaya PNBP Pgl & PBT</th>
         <th></th>
         <th></th>
        <td  className='text-right'>{formatRupiah(hargaPenggugat.proses)}</td>
      </tr>

      {/* row 4 */}
      <tr className='border-none'>
        <th className='border-none font-normal'>Redaksi</th>
         <th></th>
         <th></th>
        <td className='text-right'>{formatRupiah(hargaPenggugat.redaksi)}</td>
      </tr>
      {/* row 5 */}
      <tr className='border-none'>
        <th className='border-none font-normal'>Materai</th>
         <th></th>
         <th></th>
        <td className='text-right'>Blue</td>
      </tr>
      {/* row 6 */}
      <tr className='border-none'>
        <th className='border-none font-normal'>Biaya Proses</th>
         <th></th>
         <th></th>
        <td className='text-right'>Blue</td>
      </tr>
      {/* row 7 */}
      <tr className='border-none'>
        <th className='border-none font-bold'>Biaya Panggilan {title == 'istri' ? 'Penggugat (2x)': 'Termohon (3x)'}</th>
         <th></th>
         <th></th>
        <td className='text-right'>Blue</td>
      </tr>
      {/* row 8 */}
      <tr className='border-none'>
        <th className='border-none font-normal'>Lokasi Kecamatan</th>
         <th></th>
         <th></th>
        <td className='text-right'>Blue</td>
      </tr>
      {/* row 9 */}
      <tr className='border-none'>
        <th className='border-none font-normal'>Besar Biaya/Panggilan</th>
         <th></th>
         <th></th>
        <td className='text-right'>Blue</td>
      </tr>
      {/* row 10 */}
      <tr className='border-none'>
        <th className='border-none font-normal'>Jumlah Biaya/Panggilan</th>
         <th></th>
         <th></th>
        <td className='text-right'>Blue</td>
      </tr>
      {/* row 11 */}
      <tr className='border-none'>
        <th className='border-none font-bold'>Biaya Panggilan {title == 'istri' ? 'Penggugat (3x)': 'Termohon (4x)'}</th>
         <th></th>
         <th></th>
        <td className='text-right'>Blue</td>
      </tr>
      {/* row 12 */}
      <tr className='border-none'>
        <th className='border-none font-normal'>Lokasi Kecamatan</th>
         <th></th>
         <th></th>
        <td className='text-right'>Blue</td>
      </tr>
      {/* row 13 */}
      <tr className='border-none'>
        <th className='border-none font-normal'>Besar Biaya/Panggilan</th>
         <th></th>
         <th></th>
        <td className='text-right'>Blue</td>
      </tr>
      {/* row 14 */}
      <tr className='border-none'>
        <th className='border-none font-normal'>Jumlah Biaya/Panggilan</th>
         <th></th>
         <th></th>
        <td className='text-right'>Blue</td>
      </tr>
      <tr className='border-none'></tr>
      {/* row 15 */}
      <tr className='border-none'>
        <th className='border-none font-bold text-green-primary'>Jumlah Total Biaya Panjar</th>
         <th></th>
         <th></th>
        <td className='text-right'>Blue</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
      </Layout>
    </div>
  )
}

export default HasilPanjar