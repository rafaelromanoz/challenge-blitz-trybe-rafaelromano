function validateInputAndSelect(task, select) {
  if (task === '') return true;
  if (select === '') return true;
  return false;
}

export default validateInputAndSelect;
