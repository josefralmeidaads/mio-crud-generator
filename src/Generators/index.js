import Mustache from "mustache";
import path from "path";
import fs from "fs";

const writeFile = async (filePath, fileName, content) => {
  try {
    const absoluteFileName = path.join(filePath, fileName);
    fs.mkdirSync(filePath, { recursive: true });
    const data = fs.writeFileSync(absoluteFileName, content);
  } catch (err) {
    console.error(err);
  }
};

const appendFile = async (filePath, fileName, content) => {
  try {
    const absoluteFileName = path.join(filePath, fileName);

    fs.mkdirSync(filePath, { recursive: true });
    const data = fs.appendFileSync(absoluteFileName, content);
  } catch (err) {
    console.error(err);
  }
};

const generatePage = ({ pageName }) => {
  const templateFilePath = path.join(
    __dirname,
    '..',
    'Templates',
    'BasicCrud',
    'index.mustache'
  );

  const filePath = path.join(
    process.cwd(),
    "src",
    "pages",
    pageName
  );

  console.log('Template File ->', templateFilePath)
  console.log('FilePath ->', filePath)

  const templateFileString = fs.readFileSync(templateFilePath, "utf-8");

  try {
    const templateFileString = fs.readFileSync(templateFilePath, "utf-8");
    var rendered = Mustache.render(templateFileString, {
      pageName
    });

    writeFile(filePath, "index.js", rendered);
  } catch (e) {
    console.log(e);
  }
};

const generateForm = ({ pageName }) => {
  const templateFilePath = path.join(
    __dirname,
    "..",
    "Templates",
    "BasicCrud",
    `form.mustache`
  );

  const filePath = path.join(
    process.cwd(),
    "src",
    "pages",
    pageName,
    "components",
    "Form"
  );

  try {
    const templateFileString = fs.readFileSync(templateFilePath, "utf-8");
    var rendered = Mustache.render(templateFileString, {
      pageName
    });

    writeFile(filePath, "index.js", rendered);
  } catch (e) {
    console.log(e);
  }
};

const generateTable = ({ pageName}) => {
  
  const templateFilePath = path.join(
    __dirname,
    "..",
    "Templates",
    "BasicCrud",
    `table.mustache`
  );

  const filePath = path.join(
    process.cwd(),
    "src",
    "pages",
    pageName,
    "components",
    "Table"
  );

  const dataColumns = [
    {
      name: 'SpedTeste',
      label: 'Teste'
    },
    {
      name: 'SpedTeste2',
      label: 'Teste2'
    },
  ]

  try {
    const templateFileString = fs.readFileSync(templateFilePath, "utf-8");
      var rendered = Mustache.render(templateFileString, {
        pageName,
        dataColumns,
      });
      writeFile(filePath, "index.js", rendered)
  } catch (e) {
    console.log(e);
  }
};

/**
 *
 * @param {*} args Parâmetros
 */
export async function handle( name, options ) {
  const pageName = name;

  generatePage({ pageName });
  generateForm({ pageName });
  generateTable({ pageName });
}
