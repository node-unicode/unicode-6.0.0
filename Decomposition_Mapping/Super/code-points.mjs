import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H8MCIGSZzvPqTM4lUwXamWE1w/d/v9VtX+++ExuHpK2T8T1MUiATCjGaQG3T62sRWkSzhq7oE4j9DuQd7f4K1BZBkCyG/OBDnL1IYLwuNhRs8/0d6/Pb1N7mxwD5EPkoPkWew/9e8D8Yj6BBrmseGwWIz7Rbj/EodhB2Xb2XOBETwsOMeU5MwRzHU5Tx8Hf0lqMGHi//yyRm/TnvhpXxTuCNqXkwjDxvPOFyTWKyMlf/KZh5nU/APPeOoLDnFugXnmMERp9DBnW6dU3jbC9tUpC5sH59SLtRU0zI8T9mjuNUk/ELhNDssH+7dU4E1OCOUBtsJ8m5xPhxcSrpjwOuDLhGrE2c5Wj9eK2LZwPqfO0peOU/A/mGV8YyrGrhCtKHimPpbluzd4dpSyp7tKhqPdtiVTnxG61NKgAA', 'base64')).toString());
