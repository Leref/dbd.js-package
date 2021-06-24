module.exports = async (d) => {
  const code = d.command.code;

  const r = code.split("$advancedTextSplit").length - 1;

  const inside = code.split("$advancedTextSplit")[r].after();

  const fields = inside.splits;

  let text = "",
    started = false;

  while (fields.length) {
    if (started) {
      let [split, index] = fields.splice(0, 2);

      index = Number(index) - 1 || 0;

      text = text.addBrackets().split(split.addBrackets())[index] || "";
    } else {
      let [m, split, index] = fields.splice(0, 3);

      index = Number(index) - 1 || 0;

      text = m.addBrackets().split(split.addBrackets())[index] || "";

      started = true;
    }
  }

  return {
    code: d.command.code.replaceLast(
      `$advancedTextSplit${inside.total}`,
      text.deleteBrackets()
    ),
  };
};
