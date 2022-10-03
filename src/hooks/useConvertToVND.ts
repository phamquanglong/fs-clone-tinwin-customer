const useConvertToVND = (num: Number) => {
  return num.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};

export default useConvertToVND;
