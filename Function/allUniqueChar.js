function all_unique_char(st) {
  let st1 = st;
  let uniql = "";
  for (let i = 0; i < st.length; i++) {
    if (uniql.indexOf(st1.charAt(i)) == -1) {
      uniql += st1[i];
    }
  }
  //   console.log(uniql.length);
  return uniql;
}

console.log(all_unique_char("thequickbrownfoxjumpsoverthelazydog"));
