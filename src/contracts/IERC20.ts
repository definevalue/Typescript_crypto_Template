export default {
  "contractName": "IERC20",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.7+commit.e28d00a7\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `account`.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves `amount` tokens from the caller's account to `recipient`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/Users/macbookpro4eric/Projects/blockchain/project56_vanillaTs_dapp_boilerplate/contracts/Utils.sol\":\"IERC20\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/macbookpro4eric/Projects/blockchain/project56_vanillaTs_dapp_boilerplate/contracts/Utils.sol\":{\"keccak256\":\"0x2e172de4d7623aac6dd65ac3746b08b4cb2716a54bf68994b055d86a67e79c11\",\"license\":\"UNLICENSED\",\"urls\":[\"bzz-raw://26db0d6ccc62acf9b486d62febcf5234e1b7d7ecc7e11641054049d3ff4dbab9\",\"dweb:/ipfs/QmTqYZsDX1r9i1Ci4Wzp6evagSpewztC3gj6Zhj7s8bMB9\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.0;\n\n\nabstract contract Context {\n    function _msgSender() internal view virtual returns (address) {\n        return msg.sender;\n    }\n\n    function _msgData() internal view virtual returns (bytes memory) {\n        this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691\n        return msg.data;\n    }\n}\n\n\ninterface IERC20 {\n    /**\n     * @dev Returns the amount of tokens in existence.\n     */\n    function totalSupply() external view returns (uint256);\n\n    /**\n     * @dev Returns the amount of tokens owned by `account`.\n     */\n    function balanceOf(address account) external view returns (uint256);\n\n    /**\n     * @dev Moves `amount` tokens from the caller's account to `recipient`.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transfer(address recipient, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Returns the remaining number of tokens that `spender` will be\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\n     * zero by default.\n     *\n     * This value changes when {approve} or {transferFrom} are called.\n     */\n    function allowance(address owner, address spender) external view returns (uint256);\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\n     * that someone may use both the old and the new allowance by unfortunate\n     * transaction ordering. One possible solution to mitigate this race\n     * condition is to first reduce the spender's allowance to 0 and set the\n     * desired value afterwards:\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     *\n     * Emits an {Approval} event.\n     */\n    function approve(address spender, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\n     * allowance mechanism. `amount` is then deducted from the caller's\n     * allowance.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\n     * another (`to`).\n     *\n     * Note that `value` may be zero.\n     */\n    event Transfer(address indexed from, address indexed to, uint256 value);\n\n    /**\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\n     * a call to {approve}. `value` is the new allowance.\n     */\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n\nabstract contract ReentrancyGuard {\n    // Booleans are more expensive than uint256 or any type that takes up a full\n    // word because each write operation emits an extra SLOAD to first read the\n    // slot's contents, replace the bits taken up by the boolean, and then write\n    // back. This is the compiler's defense against contract upgrades and\n    // pointer aliasing, and it cannot be disabled.\n\n    // The values being non-zero value makes deployment a bit more expensive,\n    // but in exchange the refund on every call to nonReentrant will be lower in\n    // amount. Since refunds are capped to a percentage of the total\n    // transaction's gas, it is best to keep them low in cases like this one, to\n    // increase the likelihood of the full refund coming into effect.\n    uint256 private constant _NOT_ENTERED = 1;\n    uint256 private constant _ENTERED = 2;\n\n    uint256 private _status;\n\n    constructor() {\n        _status = _NOT_ENTERED;\n    }\n\n    /**\n     * @dev Prevents a contract from calling itself, directly or indirectly.\n     * Calling a `nonReentrant` function from another `nonReentrant`\n     * function is not supported. It is possible to prevent this from happening\n     * by making the `nonReentrant` function external, and make it call a\n     * `private` function that does the actual work.\n     */\n    modifier nonReentrant() {\n        // On the first call to nonReentrant, _notEntered will be true\n        require(_status != _ENTERED, \"ReentrancyGuard: reentrant call\");\n\n        // Any calls to nonReentrant after this point will fail\n        _status = _ENTERED;\n\n        _;\n\n        // By storing the original value once again, a refund is triggered (see\n        // https://eips.ethereum.org/EIPS/eip-2200)\n        _status = _NOT_ENTERED;\n    }\n}\n\n\nlibrary SafeMath {\n    /**\n     * @dev Returns the addition of two unsigned integers, reverting on\n     * overflow.\n     *\n     * Counterpart to Solidity's `+` operator.\n     *\n     * Requirements:\n     *\n     * - Addition cannot overflow.\n     */\n    function add(uint256 a, uint256 b) internal pure returns (uint256) {\n        uint256 c = a + b;\n        require(c >= a, \"SafeMath: addition overflow\");\n\n        return c;\n    }\n\n    /**\n     * @dev Returns the subtraction of two unsigned integers, reverting on\n     * overflow (when the result is negative).\n     *\n     * Counterpart to Solidity's `-` operator.\n     *\n     * Requirements:\n     *\n     * - Subtraction cannot overflow.\n     */\n    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n        return sub(a, b, \"SafeMath: subtraction overflow\");\n    }\n\n    /**\n     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on\n     * overflow (when the result is negative).\n     *\n     * Counterpart to Solidity's `-` operator.\n     *\n     * Requirements:\n     *\n     * - Subtraction cannot overflow.\n     */\n    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\n        require(b <= a, errorMessage);\n        uint256 c = a - b;\n\n        return c;\n    }\n\n    /**\n     * @dev Returns the multiplication of two unsigned integers, reverting on\n     * overflow.\n     *\n     * Counterpart to Solidity's `*` operator.\n     *\n     * Requirements:\n     *\n     * - Multiplication cannot overflow.\n     */\n    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the\n        // benefit is lost if 'b' is also tested.\n        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522\n        if (a == 0) {\n            return 0;\n        }\n\n        uint256 c = a * b;\n        require(c / a == b, \"SafeMath: multiplication overflow\");\n\n        return c;\n    }\n\n    /**\n     * @dev Returns the integer division of two unsigned integers. Reverts on\n     * division by zero. The result is rounded towards zero.\n     *\n     * Counterpart to Solidity's `/` operator. Note: this function uses a\n     * `revert` opcode (which leaves remaining gas untouched) while Solidity\n     * uses an invalid opcode to revert (consuming all remaining gas).\n     *\n     * Requirements:\n     *\n     * - The divisor cannot be zero.\n     */\n    function div(uint256 a, uint256 b) internal pure returns (uint256) {\n        return div(a, b, \"SafeMath: division by zero\");\n    }\n\n    /**\n     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on\n     * division by zero. The result is rounded towards zero.\n     *\n     * Counterpart to Solidity's `/` operator. Note: this function uses a\n     * `revert` opcode (which leaves remaining gas untouched) while Solidity\n     * uses an invalid opcode to revert (consuming all remaining gas).\n     *\n     * Requirements:\n     *\n     * - The divisor cannot be zero.\n     */\n    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\n        require(b > 0, errorMessage);\n        uint256 c = a / b;\n        // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n\n        return c;\n    }\n\n    /**\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\n     * Reverts when dividing by zero.\n     *\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\n     * invalid opcode to revert (consuming all remaining gas).\n     *\n     * Requirements:\n     *\n     * - The divisor cannot be zero.\n     */\n    function mod(uint256 a, uint256 b) internal pure returns (uint256) {\n        return mod(a, b, \"SafeMath: modulo by zero\");\n    }\n\n    /**\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\n     * Reverts with custom message when dividing by zero.\n     *\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\n     * invalid opcode to revert (consuming all remaining gas).\n     *\n     * Requirements:\n     *\n     * - The divisor cannot be zero.\n     */\n    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\n        require(b != 0, errorMessage);\n        return a % b;\n    }\n}\n\nabstract contract Ownable is Context {\n    address private _owner;\n\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\n\n    /**\n     * @dev Initializes the contract setting the deployer as the initial owner.\n     */\n    constructor () {\n        address msgSender = _msgSender();\n        _owner = msgSender;\n        emit OwnershipTransferred(address(0), msgSender);\n    }\n\n    /**\n     * @dev Returns the address of the current owner.\n     */\n    function owner() public view returns (address) {\n        return _owner;\n    }\n\n    /**\n     * @dev Throws if called by any account other than the owner.\n     */\n    modifier onlyOwner() {\n        require(_owner == _msgSender(), \"Ownable: caller is not the owner\");\n        _;\n    }\n\n    /**\n     * @dev Leaves the contract without owner. It will not be possible to call\n     * `onlyOwner` functions anymore. Can only be called by the current owner.\n     *\n     * NOTE: Renouncing ownership will leave the contract without an owner,\n     * thereby removing any functionality that is only available to the owner.\n     */\n    function renounceOwnership() public virtual onlyOwner {\n        emit OwnershipTransferred(_owner, address(0));\n        _owner = address(0);\n    }\n\n    /**\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\n     * Can only be called by the current owner.\n     */\n    function transferOwnership(address newOwner) public virtual onlyOwner {\n        require(newOwner != address(0), \"Ownable: new owner is the zero address\");\n        emit OwnershipTransferred(_owner, newOwner);\n        _owner = newOwner;\n    }\n}\n\n\nlibrary Address {\n    /**\n     * @dev Returns true if `account` is a contract.\n     *\n     * [IMPORTANT]\n     * ====\n     * It is unsafe to assume that an address for which this function returns\n     * false is an externally-owned account (EOA) and not a contract.\n     *\n     * Among others, `isContract` will return false for the following\n     * types of addresses:\n     *\n     *  - an externally-owned account\n     *  - a contract in construction\n     *  - an address where a contract will be created\n     *  - an address where a contract lived, but was destroyed\n     * ====\n     */\n    function isContract(address account) internal view returns (bool) {\n        // This method relies on extcodesize, which returns 0 for contracts in\n        // construction, since the code is only stored at the end of the\n        // constructor execution.\n\n        uint256 size;\n        assembly {\n            size := extcodesize(account)\n        }\n        return size > 0;\n    }\n\n    /**\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\n     * `recipient`, forwarding all available gas and reverting on errors.\n     *\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\n     * imposed by `transfer`, making them unable to receive funds via\n     * `transfer`. {sendValue} removes this limitation.\n     *\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n     *\n     * IMPORTANT: because control is transferred to `recipient`, care must be\n     * taken to not create reentrancy vulnerabilities. Consider using\n     * {ReentrancyGuard} or the\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\n     */\n    function sendValue(address payable recipient, uint256 amount) internal {\n        require(address(this).balance >= amount, \"Address: insufficient balance\");\n\n        (bool success, ) = recipient.call{value: amount}(\"\");\n        require(success, \"Address: unable to send value, recipient may have reverted\");\n    }\n\n    /**\n     * @dev Performs a Solidity function call using a low level `call`. A\n     * plain `call` is an unsafe replacement for a function call: use this\n     * function instead.\n     *\n     * If `target` reverts with a revert reason, it is bubbled up by this\n     * function (like regular Solidity function calls).\n     *\n     * Returns the raw returned data. To convert to the expected return value,\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n     *\n     * Requirements:\n     *\n     * - `target` must be a contract.\n     * - calling `target` with `data` must not revert.\n     *\n     * _Available since v3.1._\n     */\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\n        return functionCall(target, data, \"Address: low-level call failed\");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\n     * `errorMessage` as a fallback revert reason when `target` reverts.\n     *\n     * _Available since v3.1._\n     */\n    function functionCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        return functionCallWithValue(target, data, 0, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but also transferring `value` wei to `target`.\n     *\n     * Requirements:\n     *\n     * - the calling contract must have an ETH balance of at least `value`.\n     * - the called Solidity function must be `payable`.\n     *\n     * _Available since v3.1._\n     */\n    function functionCallWithValue(\n        address target,\n        bytes memory data,\n        uint256 value\n    ) internal returns (bytes memory) {\n        return functionCallWithValue(target, data, value, \"Address: low-level call with value failed\");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\n     *\n     * _Available since v3.1._\n     */\n    function functionCallWithValue(\n        address target,\n        bytes memory data,\n        uint256 value,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        require(address(this).balance >= value, \"Address: insufficient balance for call\");\n        require(isContract(target), \"Address: call to non-contract\");\n\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\n        return _verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but performing a static call.\n     *\n     * _Available since v3.3._\n     */\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\n        return functionStaticCall(target, data, \"Address: low-level static call failed\");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n     * but performing a static call.\n     *\n     * _Available since v3.3._\n     */\n    function functionStaticCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal view returns (bytes memory) {\n        require(isContract(target), \"Address: static call to non-contract\");\n\n        (bool success, bytes memory returndata) = target.staticcall(data);\n        return _verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but performing a delegate call.\n     *\n     * _Available since v3.4._\n     */\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\n        return functionDelegateCall(target, data, \"Address: low-level delegate call failed\");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n     * but performing a delegate call.\n     *\n     * _Available since v3.4._\n     */\n    function functionDelegateCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        require(isContract(target), \"Address: delegate call to non-contract\");\n\n        (bool success, bytes memory returndata) = target.delegatecall(data);\n        return _verifyCallResult(success, returndata, errorMessage);\n    }\n\n    function _verifyCallResult(\n        bool success,\n        bytes memory returndata,\n        string memory errorMessage\n    ) private pure returns (bytes memory) {\n        if (success) {\n            return returndata;\n        } else {\n            // Look for revert reason and bubble it up if present\n            if (returndata.length > 0) {\n                // The easiest way to bubble the revert reason is using memory via assembly\n\n                assembly {\n                    let returndata_size := mload(returndata)\n                    revert(add(32, returndata), returndata_size)\n                }\n            } else {\n                revert(errorMessage);\n            }\n        }\n    }\n}\n",
  "sourcePath": "/Users/macbookpro4eric/Projects/blockchain/project56_vanillaTs_dapp_boilerplate/contracts/Utils.sol",
  "ast": {
    "absolutePath": "/Users/macbookpro4eric/Projects/blockchain/project56_vanillaTs_dapp_boilerplate/contracts/Utils.sol",
    "exportedSymbols": {
      "Address": [
        1869
      ],
      "Context": [
        1166
      ],
      "IERC20": [
        1241
      ],
      "Ownable": [
        1576
      ],
      "ReentrancyGuard": [
        1278
      ],
      "SafeMath": [
        1471
      ]
    },
    "id": 1870,
    "license": "UNLICENSED",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1145,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "39:23:2"
      },
      {
        "abstract": true,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 1166,
        "linearizedBaseContracts": [
          1166
        ],
        "name": "Context",
        "nameLocation": "83:7:2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1153,
              "nodeType": "Block",
              "src": "159:34:2",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 1150,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "176:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 1151,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "176:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1149,
                  "id": 1152,
                  "nodeType": "Return",
                  "src": "169:17:2"
                }
              ]
            },
            "id": 1154,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgSender",
            "nameLocation": "106:10:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1146,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "116:2:2"
            },
            "returnParameters": {
              "id": 1149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1148,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1154,
                  "src": "150:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1147,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "150:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "149:9:2"
            },
            "scope": 1166,
            "src": "97:96:2",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1164,
              "nodeType": "Block",
              "src": "264:165:2",
              "statements": [
                {
                  "expression": {
                    "id": 1159,
                    "name": "this",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4294967268,
                    "src": "274:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Context_$1166",
                      "typeString": "contract Context"
                    }
                  },
                  "id": 1160,
                  "nodeType": "ExpressionStatement",
                  "src": "274:4:2"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 1161,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "414:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 1162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "data",
                    "nodeType": "MemberAccess",
                    "src": "414:8:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes calldata"
                    }
                  },
                  "functionReturnParameters": 1158,
                  "id": 1163,
                  "nodeType": "Return",
                  "src": "407:15:2"
                }
              ]
            },
            "id": 1165,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgData",
            "nameLocation": "208:8:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1155,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "216:2:2"
            },
            "returnParameters": {
              "id": 1158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1157,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1165,
                  "src": "250:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1156,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "250:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "249:14:2"
            },
            "scope": 1166,
            "src": "199:230:2",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "scope": 1870,
        "src": "65:366:2",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 1241,
        "linearizedBaseContracts": [
          1241
        ],
        "name": "IERC20",
        "nameLocation": "444:6:2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "documentation": {
              "id": 1167,
              "nodeType": "StructuredDocumentation",
              "src": "457:66:2",
              "text": " @dev Returns the amount of tokens in existence."
            },
            "functionSelector": "18160ddd",
            "id": 1172,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "537:11:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1168,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "548:2:2"
            },
            "returnParameters": {
              "id": 1171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1170,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1172,
                  "src": "574:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1169,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "574:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "573:9:2"
            },
            "scope": 1241,
            "src": "528:55:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1173,
              "nodeType": "StructuredDocumentation",
              "src": "589:72:2",
              "text": " @dev Returns the amount of tokens owned by `account`."
            },
            "functionSelector": "70a08231",
            "id": 1180,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "675:9:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1175,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "693:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1180,
                  "src": "685:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1174,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "684:17:2"
            },
            "returnParameters": {
              "id": 1179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1178,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1180,
                  "src": "725:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1177,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "725:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "724:9:2"
            },
            "scope": 1241,
            "src": "666:68:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1181,
              "nodeType": "StructuredDocumentation",
              "src": "740:209:2",
              "text": " @dev Moves `amount` tokens from the caller's account to `recipient`.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
            },
            "functionSelector": "a9059cbb",
            "id": 1190,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nameLocation": "963:8:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1186,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1183,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "980:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1190,
                  "src": "972:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1182,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "972:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1185,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "999:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1190,
                  "src": "991:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1184,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "991:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "971:35:2"
            },
            "returnParameters": {
              "id": 1189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1188,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1190,
                  "src": "1025:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1187,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1025:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1024:6:2"
            },
            "scope": 1241,
            "src": "954:77:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1191,
              "nodeType": "StructuredDocumentation",
              "src": "1037:264:2",
              "text": " @dev Returns the remaining number of tokens that `spender` will be\n allowed to spend on behalf of `owner` through {transferFrom}. This is\n zero by default.\n This value changes when {approve} or {transferFrom} are called."
            },
            "functionSelector": "dd62ed3e",
            "id": 1200,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "allowance",
            "nameLocation": "1315:9:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1193,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "1333:5:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1200,
                  "src": "1325:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1192,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1325:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1195,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1348:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1200,
                  "src": "1340:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1194,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1340:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1324:32:2"
            },
            "returnParameters": {
              "id": 1199,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1198,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1200,
                  "src": "1380:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1197,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1380:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1379:9:2"
            },
            "scope": 1241,
            "src": "1306:83:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1201,
              "nodeType": "StructuredDocumentation",
              "src": "1395:642:2",
              "text": " @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n Returns a boolean value indicating whether the operation succeeded.\n IMPORTANT: Beware that changing an allowance with this method brings the risk\n that someone may use both the old and the new allowance by unfortunate\n transaction ordering. One possible solution to mitigate this race\n condition is to first reduce the spender's allowance to 0 and set the\n desired value afterwards:\n https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n Emits an {Approval} event."
            },
            "functionSelector": "095ea7b3",
            "id": 1210,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "2051:7:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1206,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1203,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2067:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1210,
                  "src": "2059:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1202,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2059:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1205,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2084:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1210,
                  "src": "2076:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1204,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2076:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2058:33:2"
            },
            "returnParameters": {
              "id": 1209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1208,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1210,
                  "src": "2110:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1207,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2110:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2109:6:2"
            },
            "scope": 1241,
            "src": "2042:74:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1211,
              "nodeType": "StructuredDocumentation",
              "src": "2122:296:2",
              "text": " @dev Moves `amount` tokens from `sender` to `recipient` using the\n allowance mechanism. `amount` is then deducted from the caller's\n allowance.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
            },
            "functionSelector": "23b872dd",
            "id": 1222,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "2432:12:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1213,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "2453:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1222,
                  "src": "2445:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1212,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2445:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1215,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "2469:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1222,
                  "src": "2461:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1214,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2461:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1217,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2488:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1222,
                  "src": "2480:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1216,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2480:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2444:51:2"
            },
            "returnParameters": {
              "id": 1221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1220,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1222,
                  "src": "2514:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1219,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2514:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2513:6:2"
            },
            "scope": 1241,
            "src": "2423:97:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": {
              "id": 1223,
              "nodeType": "StructuredDocumentation",
              "src": "2526:158:2",
              "text": " @dev Emitted when `value` tokens are moved from one account (`from`) to\n another (`to`).\n Note that `value` may be zero."
            },
            "id": 1231,
            "name": "Transfer",
            "nameLocation": "2695:8:2",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1230,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1225,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "2720:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1231,
                  "src": "2704:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1224,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2704:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1227,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "2742:2:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1231,
                  "src": "2726:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1226,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2726:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1229,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2754:5:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1231,
                  "src": "2746:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1228,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2746:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2703:57:2"
            },
            "src": "2689:72:2"
          },
          {
            "anonymous": false,
            "documentation": {
              "id": 1232,
              "nodeType": "StructuredDocumentation",
              "src": "2767:148:2",
              "text": " @dev Emitted when the allowance of a `spender` for an `owner` is set by\n a call to {approve}. `value` is the new allowance."
            },
            "id": 1240,
            "name": "Approval",
            "nameLocation": "2926:8:2",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1234,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2951:5:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1240,
                  "src": "2935:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1233,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2935:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1236,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2974:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1240,
                  "src": "2958:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1235,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2958:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1238,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2991:5:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1240,
                  "src": "2983:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1237,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2983:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2934:63:2"
            },
            "src": "2920:78:2"
          }
        ],
        "scope": 1870,
        "src": "434:2566:2",
        "usedErrors": []
      },
      {
        "abstract": true,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 1278,
        "linearizedBaseContracts": [
          1278
        ],
        "name": "ReentrancyGuard",
        "nameLocation": "3020:15:2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 1244,
            "mutability": "constant",
            "name": "_NOT_ENTERED",
            "nameLocation": "3815:12:2",
            "nodeType": "VariableDeclaration",
            "scope": 1278,
            "src": "3790:41:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1242,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3790:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31",
              "id": 1243,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3830:1:2",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 1247,
            "mutability": "constant",
            "name": "_ENTERED",
            "nameLocation": "3862:8:2",
            "nodeType": "VariableDeclaration",
            "scope": 1278,
            "src": "3837:37:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1245,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3837:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "32",
              "id": 1246,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3873:1:2",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2_by_1",
                "typeString": "int_const 2"
              },
              "value": "2"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 1249,
            "mutability": "mutable",
            "name": "_status",
            "nameLocation": "3897:7:2",
            "nodeType": "VariableDeclaration",
            "scope": 1278,
            "src": "3881:23:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1248,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3881:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 1256,
              "nodeType": "Block",
              "src": "3925:39:2",
              "statements": [
                {
                  "expression": {
                    "id": 1254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1252,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1249,
                      "src": "3935:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1253,
                      "name": "_NOT_ENTERED",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1244,
                      "src": "3945:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3935:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1255,
                  "nodeType": "ExpressionStatement",
                  "src": "3935:22:2"
                }
              ]
            },
            "id": 1257,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1250,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3922:2:2"
            },
            "returnParameters": {
              "id": 1251,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3925:0:2"
            },
            "scope": 1278,
            "src": "3911:53:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1276,
              "nodeType": "Block",
              "src": "4363:421:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1263,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1261,
                          "name": "_status",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1249,
                          "src": "4452:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "id": 1262,
                          "name": "_ENTERED",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1247,
                          "src": "4463:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4452:19:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5265656e7472616e637947756172643a207265656e7472616e742063616c6c",
                        "id": 1264,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4473:33:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ebf73bba305590e4764d5cb53b69bffd6d4d092d1a67551cb346f8cfcdab8619",
                          "typeString": "literal_string \"ReentrancyGuard: reentrant call\""
                        },
                        "value": "ReentrancyGuard: reentrant call"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ebf73bba305590e4764d5cb53b69bffd6d4d092d1a67551cb346f8cfcdab8619",
                          "typeString": "literal_string \"ReentrancyGuard: reentrant call\""
                        }
                      ],
                      "id": 1260,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4444:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4444:63:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1266,
                  "nodeType": "ExpressionStatement",
                  "src": "4444:63:2"
                },
                {
                  "expression": {
                    "id": 1269,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1267,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1249,
                      "src": "4582:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1268,
                      "name": "_ENTERED",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1247,
                      "src": "4592:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4582:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1270,
                  "nodeType": "ExpressionStatement",
                  "src": "4582:18:2"
                },
                {
                  "id": 1271,
                  "nodeType": "PlaceholderStatement",
                  "src": "4611:1:2"
                },
                {
                  "expression": {
                    "id": 1274,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1272,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1249,
                      "src": "4755:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1273,
                      "name": "_NOT_ENTERED",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1244,
                      "src": "4765:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4755:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1275,
                  "nodeType": "ExpressionStatement",
                  "src": "4755:22:2"
                }
              ]
            },
            "documentation": {
              "id": 1258,
              "nodeType": "StructuredDocumentation",
              "src": "3970:364:2",
              "text": " @dev Prevents a contract from calling itself, directly or indirectly.\n Calling a `nonReentrant` function from another `nonReentrant`\n function is not supported. It is possible to prevent this from happening\n by making the `nonReentrant` function external, and make it call a\n `private` function that does the actual work."
            },
            "id": 1277,
            "name": "nonReentrant",
            "nameLocation": "4348:12:2",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1259,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4360:2:2"
            },
            "src": "4339:445:2",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 1870,
        "src": "3002:1784:2",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "fullyImplemented": true,
        "id": 1471,
        "linearizedBaseContracts": [
          1471
        ],
        "name": "SafeMath",
        "nameLocation": "4797:8:2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1303,
              "nodeType": "Block",
              "src": "5108:109:2",
              "statements": [
                {
                  "assignments": [
                    1289
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1289,
                      "mutability": "mutable",
                      "name": "c",
                      "nameLocation": "5126:1:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1303,
                      "src": "5118:9:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1288,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5118:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1293,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1290,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1281,
                      "src": "5130:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "id": 1291,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1283,
                      "src": "5134:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5130:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5118:17:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1297,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1295,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1289,
                          "src": "5153:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 1296,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1281,
                          "src": "5158:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5153:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "536166654d6174683a206164646974696f6e206f766572666c6f77",
                        "id": 1298,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5161:29:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_30cc447bcc13b3e22b45cef0dd9b0b514842d836dd9b6eb384e20dedfb47723a",
                          "typeString": "literal_string \"SafeMath: addition overflow\""
                        },
                        "value": "SafeMath: addition overflow"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_30cc447bcc13b3e22b45cef0dd9b0b514842d836dd9b6eb384e20dedfb47723a",
                          "typeString": "literal_string \"SafeMath: addition overflow\""
                        }
                      ],
                      "id": 1294,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "5145:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1299,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5145:46:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1300,
                  "nodeType": "ExpressionStatement",
                  "src": "5145:46:2"
                },
                {
                  "expression": {
                    "id": 1301,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1289,
                    "src": "5209:1:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1287,
                  "id": 1302,
                  "nodeType": "Return",
                  "src": "5202:8:2"
                }
              ]
            },
            "documentation": {
              "id": 1279,
              "nodeType": "StructuredDocumentation",
              "src": "4812:224:2",
              "text": " @dev Returns the addition of two unsigned integers, reverting on\n overflow.\n Counterpart to Solidity's `+` operator.\n Requirements:\n - Addition cannot overflow."
            },
            "id": 1304,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nameLocation": "5050:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1281,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "5062:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1304,
                  "src": "5054:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1280,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5054:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1283,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "5073:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1304,
                  "src": "5065:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1282,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5065:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5053:22:2"
            },
            "returnParameters": {
              "id": 1287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1286,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1304,
                  "src": "5099:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1285,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5099:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5098:9:2"
            },
            "scope": 1471,
            "src": "5041:176:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1320,
              "nodeType": "Block",
              "src": "5555:67:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1315,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1307,
                        "src": "5576:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1316,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1309,
                        "src": "5579:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "536166654d6174683a207375627472616374696f6e206f766572666c6f77",
                        "id": 1317,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5582:32:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_50b058e9b5320e58880d88223c9801cd9eecdcf90323d5c2318bc1b6b916e862",
                          "typeString": "literal_string \"SafeMath: subtraction overflow\""
                        },
                        "value": "SafeMath: subtraction overflow"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_50b058e9b5320e58880d88223c9801cd9eecdcf90323d5c2318bc1b6b916e862",
                          "typeString": "literal_string \"SafeMath: subtraction overflow\""
                        }
                      ],
                      "id": 1314,
                      "name": "sub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1321,
                        1349
                      ],
                      "referencedDeclaration": 1349,
                      "src": "5572:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,string memory) pure returns (uint256)"
                      }
                    },
                    "id": 1318,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5572:43:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1313,
                  "id": 1319,
                  "nodeType": "Return",
                  "src": "5565:50:2"
                }
              ]
            },
            "documentation": {
              "id": 1305,
              "nodeType": "StructuredDocumentation",
              "src": "5223:260:2",
              "text": " @dev Returns the subtraction of two unsigned integers, reverting on\n overflow (when the result is negative).\n Counterpart to Solidity's `-` operator.\n Requirements:\n - Subtraction cannot overflow."
            },
            "id": 1321,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sub",
            "nameLocation": "5497:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1310,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1307,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "5509:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1321,
                  "src": "5501:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1306,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5501:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1309,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "5520:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1321,
                  "src": "5512:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1308,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5512:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5500:22:2"
            },
            "returnParameters": {
              "id": 1313,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1312,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1321,
                  "src": "5546:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1311,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5546:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5545:9:2"
            },
            "scope": 1471,
            "src": "5488:134:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1348,
              "nodeType": "Block",
              "src": "6008:92:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1336,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1334,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1326,
                          "src": "6026:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 1335,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1324,
                          "src": "6031:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6026:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1337,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1328,
                        "src": "6034:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1333,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "6018:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1338,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6018:29:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1339,
                  "nodeType": "ExpressionStatement",
                  "src": "6018:29:2"
                },
                {
                  "assignments": [
                    1341
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1341,
                      "mutability": "mutable",
                      "name": "c",
                      "nameLocation": "6065:1:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1348,
                      "src": "6057:9:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1340,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6057:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1345,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1344,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1342,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1324,
                      "src": "6069:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 1343,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1326,
                      "src": "6073:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6069:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6057:17:2"
                },
                {
                  "expression": {
                    "id": 1346,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1341,
                    "src": "6092:1:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1332,
                  "id": 1347,
                  "nodeType": "Return",
                  "src": "6085:8:2"
                }
              ]
            },
            "documentation": {
              "id": 1322,
              "nodeType": "StructuredDocumentation",
              "src": "5628:280:2",
              "text": " @dev Returns the subtraction of two unsigned integers, reverting with custom message on\n overflow (when the result is negative).\n Counterpart to Solidity's `-` operator.\n Requirements:\n - Subtraction cannot overflow."
            },
            "id": 1349,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sub",
            "nameLocation": "5922:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1329,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1324,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "5934:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1349,
                  "src": "5926:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1323,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5926:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1326,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "5945:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1349,
                  "src": "5937:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1325,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5937:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1328,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "5962:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1349,
                  "src": "5948:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1327,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5948:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5925:50:2"
            },
            "returnParameters": {
              "id": 1332,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1331,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1349,
                  "src": "5999:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1330,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5999:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5998:9:2"
            },
            "scope": 1471,
            "src": "5913:187:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1383,
              "nodeType": "Block",
              "src": "6414:392:2",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1361,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1359,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1352,
                      "src": "6646:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 1360,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6651:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6646:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1365,
                  "nodeType": "IfStatement",
                  "src": "6642:45:2",
                  "trueBody": {
                    "id": 1364,
                    "nodeType": "Block",
                    "src": "6654:33:2",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 1362,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6675:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 1358,
                        "id": 1363,
                        "nodeType": "Return",
                        "src": "6668:8:2"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    1367
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1367,
                      "mutability": "mutable",
                      "name": "c",
                      "nameLocation": "6705:1:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1383,
                      "src": "6697:9:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1366,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6697:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1371,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1370,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1368,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1352,
                      "src": "6709:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "id": 1369,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1354,
                      "src": "6713:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6709:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6697:17:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1377,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1375,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 1373,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1367,
                            "src": "6732:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "id": 1374,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1352,
                            "src": "6736:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6732:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 1376,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1354,
                          "src": "6741:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6732:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77",
                        "id": 1378,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6744:35:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9113bb53c2876a3805b2c9242029423fc540a728243ce887ab24c82cf119fba3",
                          "typeString": "literal_string \"SafeMath: multiplication overflow\""
                        },
                        "value": "SafeMath: multiplication overflow"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9113bb53c2876a3805b2c9242029423fc540a728243ce887ab24c82cf119fba3",
                          "typeString": "literal_string \"SafeMath: multiplication overflow\""
                        }
                      ],
                      "id": 1372,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "6724:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1379,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6724:56:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1380,
                  "nodeType": "ExpressionStatement",
                  "src": "6724:56:2"
                },
                {
                  "expression": {
                    "id": 1381,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1367,
                    "src": "6798:1:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1358,
                  "id": 1382,
                  "nodeType": "Return",
                  "src": "6791:8:2"
                }
              ]
            },
            "documentation": {
              "id": 1350,
              "nodeType": "StructuredDocumentation",
              "src": "6106:236:2",
              "text": " @dev Returns the multiplication of two unsigned integers, reverting on\n overflow.\n Counterpart to Solidity's `*` operator.\n Requirements:\n - Multiplication cannot overflow."
            },
            "id": 1384,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mul",
            "nameLocation": "6356:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1352,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6368:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1384,
                  "src": "6360:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1351,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6360:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1354,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6379:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1384,
                  "src": "6371:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1353,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6371:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6359:22:2"
            },
            "returnParameters": {
              "id": 1358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1357,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1384,
                  "src": "6405:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1356,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6405:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6404:9:2"
            },
            "scope": 1471,
            "src": "6347:459:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1400,
              "nodeType": "Block",
              "src": "7335:63:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1395,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1387,
                        "src": "7356:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1396,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1389,
                        "src": "7359:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "536166654d6174683a206469766973696f6e206279207a65726f",
                        "id": 1397,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7362:28:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5b7cc70dda4dc2143e5adb63bd5d1f349504f461dbdfd9bc76fac1f8ca6d019f",
                          "typeString": "literal_string \"SafeMath: division by zero\""
                        },
                        "value": "SafeMath: division by zero"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5b7cc70dda4dc2143e5adb63bd5d1f349504f461dbdfd9bc76fac1f8ca6d019f",
                          "typeString": "literal_string \"SafeMath: division by zero\""
                        }
                      ],
                      "id": 1394,
                      "name": "div",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1401,
                        1429
                      ],
                      "referencedDeclaration": 1429,
                      "src": "7352:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,string memory) pure returns (uint256)"
                      }
                    },
                    "id": 1398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7352:39:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1393,
                  "id": 1399,
                  "nodeType": "Return",
                  "src": "7345:46:2"
                }
              ]
            },
            "documentation": {
              "id": 1385,
              "nodeType": "StructuredDocumentation",
              "src": "6812:451:2",
              "text": " @dev Returns the integer division of two unsigned integers. Reverts on\n division by zero. The result is rounded towards zero.\n Counterpart to Solidity's `/` operator. Note: this function uses a\n `revert` opcode (which leaves remaining gas untouched) while Solidity\n uses an invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
            },
            "id": 1401,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "div",
            "nameLocation": "7277:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1390,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1387,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "7289:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1401,
                  "src": "7281:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1386,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7281:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1389,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "7300:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1401,
                  "src": "7292:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1388,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7292:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7280:22:2"
            },
            "returnParameters": {
              "id": 1393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1392,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1401,
                  "src": "7326:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1391,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7326:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7325:9:2"
            },
            "scope": 1471,
            "src": "7268:130:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1428,
              "nodeType": "Block",
              "src": "7975:177:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1416,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1414,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1406,
                          "src": "7993:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 1415,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7997:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "7993:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1417,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1408,
                        "src": "8000:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1413,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "7985:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7985:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1419,
                  "nodeType": "ExpressionStatement",
                  "src": "7985:28:2"
                },
                {
                  "assignments": [
                    1421
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1421,
                      "mutability": "mutable",
                      "name": "c",
                      "nameLocation": "8031:1:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1428,
                      "src": "8023:9:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1420,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8023:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1425,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1424,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1422,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1404,
                      "src": "8035:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 1423,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1406,
                      "src": "8039:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8035:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8023:17:2"
                },
                {
                  "expression": {
                    "id": 1426,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1421,
                    "src": "8144:1:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1412,
                  "id": 1427,
                  "nodeType": "Return",
                  "src": "8137:8:2"
                }
              ]
            },
            "documentation": {
              "id": 1402,
              "nodeType": "StructuredDocumentation",
              "src": "7404:471:2",
              "text": " @dev Returns the integer division of two unsigned integers. Reverts with custom message on\n division by zero. The result is rounded towards zero.\n Counterpart to Solidity's `/` operator. Note: this function uses a\n `revert` opcode (which leaves remaining gas untouched) while Solidity\n uses an invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
            },
            "id": 1429,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "div",
            "nameLocation": "7889:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1404,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "7901:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1429,
                  "src": "7893:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1403,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7893:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1406,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "7912:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1429,
                  "src": "7904:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1405,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7904:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1408,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "7929:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1429,
                  "src": "7915:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1407,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7915:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7892:50:2"
            },
            "returnParameters": {
              "id": 1412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1411,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1429,
                  "src": "7966:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1410,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7966:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7965:9:2"
            },
            "scope": 1471,
            "src": "7880:272:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1445,
              "nodeType": "Block",
              "src": "8670:61:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1440,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1432,
                        "src": "8691:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1441,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1434,
                        "src": "8694:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "536166654d6174683a206d6f64756c6f206279207a65726f",
                        "id": 1442,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8697:26:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_726e51f7b81fce0a68f5f214f445e275313b20b1633f08ce954ee39abf8d7832",
                          "typeString": "literal_string \"SafeMath: modulo by zero\""
                        },
                        "value": "SafeMath: modulo by zero"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_726e51f7b81fce0a68f5f214f445e275313b20b1633f08ce954ee39abf8d7832",
                          "typeString": "literal_string \"SafeMath: modulo by zero\""
                        }
                      ],
                      "id": 1439,
                      "name": "mod",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1446,
                        1470
                      ],
                      "referencedDeclaration": 1470,
                      "src": "8687:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,string memory) pure returns (uint256)"
                      }
                    },
                    "id": 1443,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8687:37:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1438,
                  "id": 1444,
                  "nodeType": "Return",
                  "src": "8680:44:2"
                }
              ]
            },
            "documentation": {
              "id": 1430,
              "nodeType": "StructuredDocumentation",
              "src": "8158:440:2",
              "text": " @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\n Reverts when dividing by zero.\n Counterpart to Solidity's `%` operator. This function uses a `revert`\n opcode (which leaves remaining gas untouched) while Solidity uses an\n invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
            },
            "id": 1446,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mod",
            "nameLocation": "8612:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1435,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1432,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "8624:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1446,
                  "src": "8616:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1431,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8616:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1434,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "8635:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1446,
                  "src": "8627:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1433,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8627:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8615:22:2"
            },
            "returnParameters": {
              "id": 1438,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1437,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1446,
                  "src": "8661:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1436,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8661:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8660:9:2"
            },
            "scope": 1471,
            "src": "8603:128:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1469,
              "nodeType": "Block",
              "src": "9297:68:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1461,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1459,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1451,
                          "src": "9315:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 1460,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9320:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9315:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1462,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1453,
                        "src": "9323:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1458,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "9307:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1463,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9307:29:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1464,
                  "nodeType": "ExpressionStatement",
                  "src": "9307:29:2"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1467,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1465,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1449,
                      "src": "9353:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "id": 1466,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1451,
                      "src": "9357:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9353:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1457,
                  "id": 1468,
                  "nodeType": "Return",
                  "src": "9346:12:2"
                }
              ]
            },
            "documentation": {
              "id": 1447,
              "nodeType": "StructuredDocumentation",
              "src": "8737:460:2",
              "text": " @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\n Reverts with custom message when dividing by zero.\n Counterpart to Solidity's `%` operator. This function uses a `revert`\n opcode (which leaves remaining gas untouched) while Solidity uses an\n invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
            },
            "id": 1470,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mod",
            "nameLocation": "9211:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1449,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "9223:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1470,
                  "src": "9215:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1448,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9215:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1451,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "9234:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1470,
                  "src": "9226:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1450,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9226:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1453,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "9251:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1470,
                  "src": "9237:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1452,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9237:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9214:50:2"
            },
            "returnParameters": {
              "id": 1457,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1456,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1470,
                  "src": "9288:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1455,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9288:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9287:9:2"
            },
            "scope": 1471,
            "src": "9202:163:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 1870,
        "src": "4789:4578:2",
        "usedErrors": []
      },
      {
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 1472,
              "name": "Context",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1166,
              "src": "9398:7:2"
            },
            "id": 1473,
            "nodeType": "InheritanceSpecifier",
            "src": "9398:7:2"
          }
        ],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 1576,
        "linearizedBaseContracts": [
          1576,
          1166
        ],
        "name": "Ownable",
        "nameLocation": "9387:7:2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1475,
            "mutability": "mutable",
            "name": "_owner",
            "nameLocation": "9428:6:2",
            "nodeType": "VariableDeclaration",
            "scope": 1576,
            "src": "9412:22:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1474,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "9412:7:2",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "anonymous": false,
            "id": 1481,
            "name": "OwnershipTransferred",
            "nameLocation": "9447:20:2",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1480,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1477,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "previousOwner",
                  "nameLocation": "9484:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1481,
                  "src": "9468:29:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1476,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9468:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1479,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "9515:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1481,
                  "src": "9499:24:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1478,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9499:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9467:57:2"
            },
            "src": "9441:84:2"
          },
          {
            "body": {
              "id": 1502,
              "nodeType": "Block",
              "src": "9642:135:2",
              "statements": [
                {
                  "assignments": [
                    1486
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1486,
                      "mutability": "mutable",
                      "name": "msgSender",
                      "nameLocation": "9660:9:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1502,
                      "src": "9652:17:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1485,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "9652:7:2",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1489,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 1487,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1154,
                      "src": "9672:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 1488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9672:12:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9652:32:2"
                },
                {
                  "expression": {
                    "id": 1492,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1490,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1475,
                      "src": "9694:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1491,
                      "name": "msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1486,
                      "src": "9703:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9694:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1493,
                  "nodeType": "ExpressionStatement",
                  "src": "9694:18:2"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 1497,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9756:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 1496,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9748:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 1495,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "9748:7:2",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 1498,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9748:10:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1499,
                        "name": "msgSender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1486,
                        "src": "9760:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1494,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1481,
                      "src": "9727:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 1500,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9727:43:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1501,
                  "nodeType": "EmitStatement",
                  "src": "9722:48:2"
                }
              ]
            },
            "documentation": {
              "id": 1482,
              "nodeType": "StructuredDocumentation",
              "src": "9531:91:2",
              "text": " @dev Initializes the contract setting the deployer as the initial owner."
            },
            "id": 1503,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1483,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9639:2:2"
            },
            "returnParameters": {
              "id": 1484,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9642:0:2"
            },
            "scope": 1576,
            "src": "9627:150:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1511,
              "nodeType": "Block",
              "src": "9900:30:2",
              "statements": [
                {
                  "expression": {
                    "id": 1509,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1475,
                    "src": "9917:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1508,
                  "id": 1510,
                  "nodeType": "Return",
                  "src": "9910:13:2"
                }
              ]
            },
            "documentation": {
              "id": 1504,
              "nodeType": "StructuredDocumentation",
              "src": "9783:65:2",
              "text": " @dev Returns the address of the current owner."
            },
            "functionSelector": "8da5cb5b",
            "id": 1512,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "owner",
            "nameLocation": "9862:5:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1505,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9867:2:2"
            },
            "returnParameters": {
              "id": 1508,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1507,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1512,
                  "src": "9891:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1506,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9891:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9890:9:2"
            },
            "scope": 1576,
            "src": "9853:77:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1524,
              "nodeType": "Block",
              "src": "10039:95:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1519,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1516,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1475,
                          "src": "10057:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 1517,
                            "name": "_msgSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1154,
                            "src": "10067:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                              "typeString": "function () view returns (address)"
                            }
                          },
                          "id": 1518,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10067:12:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "10057:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "id": 1520,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10081:34:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                          "typeString": "literal_string \"Ownable: caller is not the owner\""
                        },
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                          "typeString": "literal_string \"Ownable: caller is not the owner\""
                        }
                      ],
                      "id": 1515,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "10049:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1521,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10049:67:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1522,
                  "nodeType": "ExpressionStatement",
                  "src": "10049:67:2"
                },
                {
                  "id": 1523,
                  "nodeType": "PlaceholderStatement",
                  "src": "10126:1:2"
                }
              ]
            },
            "documentation": {
              "id": 1513,
              "nodeType": "StructuredDocumentation",
              "src": "9936:77:2",
              "text": " @dev Throws if called by any account other than the owner."
            },
            "id": 1525,
            "name": "onlyOwner",
            "nameLocation": "10027:9:2",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1514,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10036:2:2"
            },
            "src": "10018:116:2",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1546,
              "nodeType": "Block",
              "src": "10530:91:2",
              "statements": [
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 1532,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1475,
                        "src": "10566:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 1535,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10582:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 1534,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "10574:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 1533,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "10574:7:2",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 1536,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10574:10:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1531,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1481,
                      "src": "10545:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 1537,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10545:40:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1538,
                  "nodeType": "EmitStatement",
                  "src": "10540:45:2"
                },
                {
                  "expression": {
                    "id": 1544,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1539,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1475,
                      "src": "10595:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 1542,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10612:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 1541,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10604:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 1540,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10604:7:2",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 1543,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10604:10:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10595:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1545,
                  "nodeType": "ExpressionStatement",
                  "src": "10595:19:2"
                }
              ]
            },
            "documentation": {
              "id": 1526,
              "nodeType": "StructuredDocumentation",
              "src": "10140:331:2",
              "text": " @dev Leaves the contract without owner. It will not be possible to call\n `onlyOwner` functions anymore. Can only be called by the current owner.\n NOTE: Renouncing ownership will leave the contract without an owner,\n thereby removing any functionality that is only available to the owner."
            },
            "functionSelector": "715018a6",
            "id": 1547,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1529,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1528,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1525,
                  "src": "10520:9:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "10520:9:2"
              }
            ],
            "name": "renounceOwnership",
            "nameLocation": "10485:17:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1527,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10502:2:2"
            },
            "returnParameters": {
              "id": 1530,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10530:0:2"
            },
            "scope": 1576,
            "src": "10476:145:2",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1574,
              "nodeType": "Block",
              "src": "10840:170:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1561,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1556,
                          "name": "newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1550,
                          "src": "10858:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 1559,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10878:1:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 1558,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10870:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 1557,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "10870:7:2",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 1560,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10870:10:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "10858:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373",
                        "id": 1562,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10882:40:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                          "typeString": "literal_string \"Ownable: new owner is the zero address\""
                        },
                        "value": "Ownable: new owner is the zero address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                          "typeString": "literal_string \"Ownable: new owner is the zero address\""
                        }
                      ],
                      "id": 1555,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "10850:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1563,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10850:73:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1564,
                  "nodeType": "ExpressionStatement",
                  "src": "10850:73:2"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 1566,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1475,
                        "src": "10959:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1567,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1550,
                        "src": "10967:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1565,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1481,
                      "src": "10938:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 1568,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10938:38:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1569,
                  "nodeType": "EmitStatement",
                  "src": "10933:43:2"
                },
                {
                  "expression": {
                    "id": 1572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1570,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1475,
                      "src": "10986:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1571,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1550,
                      "src": "10995:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10986:17:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1573,
                  "nodeType": "ExpressionStatement",
                  "src": "10986:17:2"
                }
              ]
            },
            "documentation": {
              "id": 1548,
              "nodeType": "StructuredDocumentation",
              "src": "10627:138:2",
              "text": " @dev Transfers ownership of the contract to a new account (`newOwner`).\n Can only be called by the current owner."
            },
            "functionSelector": "f2fde38b",
            "id": 1575,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1553,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1552,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1525,
                  "src": "10830:9:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "10830:9:2"
              }
            ],
            "name": "transferOwnership",
            "nameLocation": "10779:17:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1551,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1550,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "10805:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1575,
                  "src": "10797:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1549,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10797:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10796:18:2"
            },
            "returnParameters": {
              "id": 1554,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10840:0:2"
            },
            "scope": 1576,
            "src": "10770:240:2",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "scope": 1870,
        "src": "9369:1643:2",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "fullyImplemented": true,
        "id": 1869,
        "linearizedBaseContracts": [
          1869
        ],
        "name": "Address",
        "nameLocation": "11023:7:2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1592,
              "nodeType": "Block",
              "src": "11673:311:2",
              "statements": [
                {
                  "assignments": [
                    1585
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1585,
                      "mutability": "mutable",
                      "name": "size",
                      "nameLocation": "11878:4:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1592,
                      "src": "11870:12:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1584,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11870:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1586,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11870:12:2"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "11901:52:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "11915:28:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "account",
                              "nodeType": "YulIdentifier",
                              "src": "11935:7:2"
                            }
                          ],
                          "functionName": {
                            "name": "extcodesize",
                            "nodeType": "YulIdentifier",
                            "src": "11923:11:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11923:20:2"
                        },
                        "variableNames": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "11915:4:2"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "london",
                  "externalReferences": [
                    {
                      "declaration": 1579,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11935:7:2",
                      "valueSize": 1
                    },
                    {
                      "declaration": 1585,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11915:4:2",
                      "valueSize": 1
                    }
                  ],
                  "id": 1587,
                  "nodeType": "InlineAssembly",
                  "src": "11892:61:2"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1590,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1588,
                      "name": "size",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1585,
                      "src": "11969:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 1589,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11976:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "11969:8:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1583,
                  "id": 1591,
                  "nodeType": "Return",
                  "src": "11962:15:2"
                }
              ]
            },
            "documentation": {
              "id": 1577,
              "nodeType": "StructuredDocumentation",
              "src": "11037:565:2",
              "text": " @dev Returns true if `account` is a contract.\n [IMPORTANT]\n ====\n It is unsafe to assume that an address for which this function returns\n false is an externally-owned account (EOA) and not a contract.\n Among others, `isContract` will return false for the following\n types of addresses:\n  - an externally-owned account\n  - a contract in construction\n  - an address where a contract will be created\n  - an address where a contract lived, but was destroyed\n ===="
            },
            "id": 1593,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isContract",
            "nameLocation": "11616:10:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1579,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "11635:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1593,
                  "src": "11627:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1578,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11627:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11626:17:2"
            },
            "returnParameters": {
              "id": 1583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1582,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1593,
                  "src": "11667:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1581,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11667:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11666:6:2"
            },
            "scope": 1869,
            "src": "11607:377:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1626,
              "nodeType": "Block",
              "src": "12972:241:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1608,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 1604,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967268,
                                "src": "12998:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Address_$1869",
                                  "typeString": "library Address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Address_$1869",
                                  "typeString": "library Address"
                                }
                              ],
                              "id": 1603,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "12990:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 1602,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "12990:7:2",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 1605,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "12990:13:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 1606,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "src": "12990:21:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 1607,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1598,
                          "src": "13015:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "12990:31:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20696e73756666696369656e742062616c616e6365",
                        "id": 1609,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "13023:31:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5597a22abd0ef5332f8053862eb236db7590f17e2b93a53f63a103becfb561f9",
                          "typeString": "literal_string \"Address: insufficient balance\""
                        },
                        "value": "Address: insufficient balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5597a22abd0ef5332f8053862eb236db7590f17e2b93a53f63a103becfb561f9",
                          "typeString": "literal_string \"Address: insufficient balance\""
                        }
                      ],
                      "id": 1601,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "12982:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12982:73:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1611,
                  "nodeType": "ExpressionStatement",
                  "src": "12982:73:2"
                },
                {
                  "assignments": [
                    1613,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1613,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "13072:7:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1626,
                      "src": "13067:12:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1612,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "13067:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 1620,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "",
                        "id": 1618,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "13115:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "id": 1614,
                          "name": "recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1596,
                          "src": "13085:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 1615,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "13085:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 1617,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "id": 1616,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1598,
                          "src": "13107:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "13085:29:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 1619,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13085:33:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13066:52:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1622,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1613,
                        "src": "13136:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564",
                        "id": 1623,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "13145:60:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_51ddaa38748c0a1144620fb5bfe8edab31ea437571ad591a7734bbfd0429aeae",
                          "typeString": "literal_string \"Address: unable to send value, recipient may have reverted\""
                        },
                        "value": "Address: unable to send value, recipient may have reverted"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_51ddaa38748c0a1144620fb5bfe8edab31ea437571ad591a7734bbfd0429aeae",
                          "typeString": "literal_string \"Address: unable to send value, recipient may have reverted\""
                        }
                      ],
                      "id": 1621,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "13128:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1624,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13128:78:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1625,
                  "nodeType": "ExpressionStatement",
                  "src": "13128:78:2"
                }
              ]
            },
            "documentation": {
              "id": 1594,
              "nodeType": "StructuredDocumentation",
              "src": "11990:906:2",
              "text": " @dev Replacement for Solidity's `transfer`: sends `amount` wei to\n `recipient`, forwarding all available gas and reverting on errors.\n https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n of certain opcodes, possibly making contracts go over the 2300 gas limit\n imposed by `transfer`, making them unable to receive funds via\n `transfer`. {sendValue} removes this limitation.\n https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n IMPORTANT: because control is transferred to `recipient`, care must be\n taken to not create reentrancy vulnerabilities. Consider using\n {ReentrancyGuard} or the\n https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]."
            },
            "id": 1627,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sendValue",
            "nameLocation": "12910:9:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1596,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "12936:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1627,
                  "src": "12920:25:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 1595,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12920:15:2",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1598,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "12955:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1627,
                  "src": "12947:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1597,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12947:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12919:43:2"
            },
            "returnParameters": {
              "id": 1600,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12972:0:2"
            },
            "scope": 1869,
            "src": "12901:312:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1643,
              "nodeType": "Block",
              "src": "14044:84:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1638,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1630,
                        "src": "14074:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1639,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1632,
                        "src": "14082:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2063616c6c206661696c6564",
                        "id": 1640,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "14088:32:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_24d7ab5d382116e64324f19950ca9340b8af1ddeb09a8d026e0a3c6a01dcc9df",
                          "typeString": "literal_string \"Address: low-level call failed\""
                        },
                        "value": "Address: low-level call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_24d7ab5d382116e64324f19950ca9340b8af1ddeb09a8d026e0a3c6a01dcc9df",
                          "typeString": "literal_string \"Address: low-level call failed\""
                        }
                      ],
                      "id": 1637,
                      "name": "functionCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1644,
                        1664
                      ],
                      "referencedDeclaration": 1664,
                      "src": "14061:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1641,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14061:60:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1636,
                  "id": 1642,
                  "nodeType": "Return",
                  "src": "14054:67:2"
                }
              ]
            },
            "documentation": {
              "id": 1628,
              "nodeType": "StructuredDocumentation",
              "src": "13219:731:2",
              "text": " @dev Performs a Solidity function call using a low level `call`. A\n plain `call` is an unsafe replacement for a function call: use this\n function instead.\n If `target` reverts with a revert reason, it is bubbled up by this\n function (like regular Solidity function calls).\n Returns the raw returned data. To convert to the expected return value,\n use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n Requirements:\n - `target` must be a contract.\n - calling `target` with `data` must not revert.\n _Available since v3.1._"
            },
            "id": 1644,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCall",
            "nameLocation": "13964:12:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1630,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "13985:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1644,
                  "src": "13977:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1629,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13977:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1632,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "14006:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1644,
                  "src": "13993:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1631,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "13993:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13976:35:2"
            },
            "returnParameters": {
              "id": 1636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1635,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1644,
                  "src": "14030:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1634,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14030:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14029:14:2"
            },
            "scope": 1869,
            "src": "13955:173:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1663,
              "nodeType": "Block",
              "src": "14497:76:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1657,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1647,
                        "src": "14536:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1658,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1649,
                        "src": "14544:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 1659,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "14550:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "id": 1660,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1651,
                        "src": "14553:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1656,
                      "name": "functionCallWithValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1684,
                        1734
                      ],
                      "referencedDeclaration": 1734,
                      "src": "14514:21:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,uint256,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1661,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14514:52:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1655,
                  "id": 1662,
                  "nodeType": "Return",
                  "src": "14507:59:2"
                }
              ]
            },
            "documentation": {
              "id": 1645,
              "nodeType": "StructuredDocumentation",
              "src": "14134:211:2",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\n `errorMessage` as a fallback revert reason when `target` reverts.\n _Available since v3.1._"
            },
            "id": 1664,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCall",
            "nameLocation": "14359:12:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1647,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "14389:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "14381:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1646,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14381:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1649,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "14418:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "14405:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1648,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14405:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1651,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "14446:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "14432:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1650,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14432:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14371:93:2"
            },
            "returnParameters": {
              "id": 1655,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1654,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "14483:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1653,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14483:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14482:14:2"
            },
            "scope": 1869,
            "src": "14350:223:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1683,
              "nodeType": "Block",
              "src": "15078:111:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1677,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1667,
                        "src": "15117:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1678,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1669,
                        "src": "15125:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1679,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1671,
                        "src": "15131:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564",
                        "id": 1680,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "15138:43:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_88a4a0b5e975840320a0475d4027005235904fdb5ece94df156f3d717cb2dbfc",
                          "typeString": "literal_string \"Address: low-level call with value failed\""
                        },
                        "value": "Address: low-level call with value failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_88a4a0b5e975840320a0475d4027005235904fdb5ece94df156f3d717cb2dbfc",
                          "typeString": "literal_string \"Address: low-level call with value failed\""
                        }
                      ],
                      "id": 1676,
                      "name": "functionCallWithValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1684,
                        1734
                      ],
                      "referencedDeclaration": 1734,
                      "src": "15095:21:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,uint256,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15095:87:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1675,
                  "id": 1682,
                  "nodeType": "Return",
                  "src": "15088:94:2"
                }
              ]
            },
            "documentation": {
              "id": 1665,
              "nodeType": "StructuredDocumentation",
              "src": "14579:351:2",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but also transferring `value` wei to `target`.\n Requirements:\n - the calling contract must have an ETH balance of at least `value`.\n - the called Solidity function must be `payable`.\n _Available since v3.1._"
            },
            "id": 1684,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCallWithValue",
            "nameLocation": "14944:21:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1667,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "14983:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1684,
                  "src": "14975:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1666,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14975:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1669,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "15012:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1684,
                  "src": "14999:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1668,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14999:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1671,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "15034:5:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1684,
                  "src": "15026:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1670,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15026:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14965:80:2"
            },
            "returnParameters": {
              "id": 1675,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1674,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1684,
                  "src": "15064:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1673,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "15064:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15063:14:2"
            },
            "scope": 1869,
            "src": "14935:254:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1733,
              "nodeType": "Block",
              "src": "15616:321:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1705,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 1701,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967268,
                                "src": "15642:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Address_$1869",
                                  "typeString": "library Address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Address_$1869",
                                  "typeString": "library Address"
                                }
                              ],
                              "id": 1700,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "15634:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 1699,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "15634:7:2",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 1702,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "15634:13:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 1703,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "src": "15634:21:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 1704,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1691,
                          "src": "15659:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "15634:30:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c",
                        "id": 1706,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "15666:40:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_565f1a77334fc4792800921178c71e4521acffab18ff9e7885b49377ee80ab4c",
                          "typeString": "literal_string \"Address: insufficient balance for call\""
                        },
                        "value": "Address: insufficient balance for call"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_565f1a77334fc4792800921178c71e4521acffab18ff9e7885b49377ee80ab4c",
                          "typeString": "literal_string \"Address: insufficient balance for call\""
                        }
                      ],
                      "id": 1698,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "15626:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15626:81:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1708,
                  "nodeType": "ExpressionStatement",
                  "src": "15626:81:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1711,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1687,
                            "src": "15736:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 1710,
                          "name": "isContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1593,
                          "src": "15725:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1712,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "15725:18:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374",
                        "id": 1713,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "15745:31:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_cc2e4e38850b7c0a3e942cfed89b71c77302df25bcb2ec297a0c4ff9ff6b90ad",
                          "typeString": "literal_string \"Address: call to non-contract\""
                        },
                        "value": "Address: call to non-contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_cc2e4e38850b7c0a3e942cfed89b71c77302df25bcb2ec297a0c4ff9ff6b90ad",
                          "typeString": "literal_string \"Address: call to non-contract\""
                        }
                      ],
                      "id": 1709,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "15717:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1714,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15717:60:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1715,
                  "nodeType": "ExpressionStatement",
                  "src": "15717:60:2"
                },
                {
                  "assignments": [
                    1717,
                    1719
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1717,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "15794:7:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1733,
                      "src": "15789:12:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1716,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "15789:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1719,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "15816:10:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1733,
                      "src": "15803:23:2",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1718,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "15803:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1726,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1724,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1689,
                        "src": "15856:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "expression": {
                          "id": 1720,
                          "name": "target",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1687,
                          "src": "15830:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 1721,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "15830:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 1723,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "id": 1722,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1691,
                          "src": "15849:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "15830:25:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 1725,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15830:31:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "15788:73:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1728,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1717,
                        "src": "15896:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1729,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1719,
                        "src": "15905:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1730,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1693,
                        "src": "15917:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1727,
                      "name": "_verifyCallResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1868,
                      "src": "15878:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bool,bytes memory,string memory) pure returns (bytes memory)"
                      }
                    },
                    "id": 1731,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15878:52:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1697,
                  "id": 1732,
                  "nodeType": "Return",
                  "src": "15871:59:2"
                }
              ]
            },
            "documentation": {
              "id": 1685,
              "nodeType": "StructuredDocumentation",
              "src": "15195:237:2",
              "text": " @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\n with `errorMessage` as a fallback revert reason when `target` reverts.\n _Available since v3.1._"
            },
            "id": 1734,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCallWithValue",
            "nameLocation": "15446:21:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1687,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "15485:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1734,
                  "src": "15477:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1686,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15477:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1689,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "15514:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1734,
                  "src": "15501:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1688,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "15501:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1691,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "15536:5:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1734,
                  "src": "15528:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1690,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15528:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1693,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "15565:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1734,
                  "src": "15551:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1692,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15551:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15467:116:2"
            },
            "returnParameters": {
              "id": 1697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1696,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1734,
                  "src": "15602:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1695,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "15602:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15601:14:2"
            },
            "scope": 1869,
            "src": "15437:500:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1750,
              "nodeType": "Block",
              "src": "16214:97:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1745,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1737,
                        "src": "16250:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1746,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1739,
                        "src": "16258:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c207374617469632063616c6c206661696c6564",
                        "id": 1747,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "16264:39:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_90ec82aa826a536a4cbfae44ecfa384680faa9a4b77344bce96aa761ad904df0",
                          "typeString": "literal_string \"Address: low-level static call failed\""
                        },
                        "value": "Address: low-level static call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_90ec82aa826a536a4cbfae44ecfa384680faa9a4b77344bce96aa761ad904df0",
                          "typeString": "literal_string \"Address: low-level static call failed\""
                        }
                      ],
                      "id": 1744,
                      "name": "functionStaticCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1751,
                        1786
                      ],
                      "referencedDeclaration": 1786,
                      "src": "16231:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,string memory) view returns (bytes memory)"
                      }
                    },
                    "id": 1748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16231:73:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1743,
                  "id": 1749,
                  "nodeType": "Return",
                  "src": "16224:80:2"
                }
              ]
            },
            "documentation": {
              "id": 1735,
              "nodeType": "StructuredDocumentation",
              "src": "15943:166:2",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a static call.\n _Available since v3.3._"
            },
            "id": 1751,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionStaticCall",
            "nameLocation": "16123:18:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1740,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1737,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "16150:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1751,
                  "src": "16142:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1736,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16142:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1739,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "16171:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1751,
                  "src": "16158:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1738,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "16158:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16141:35:2"
            },
            "returnParameters": {
              "id": 1743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1742,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1751,
                  "src": "16200:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1741,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "16200:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16199:14:2"
            },
            "scope": 1869,
            "src": "16114:197:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1785,
              "nodeType": "Block",
              "src": "16653:229:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1765,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1754,
                            "src": "16682:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 1764,
                          "name": "isContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1593,
                          "src": "16671:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1766,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "16671:18:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a207374617469632063616c6c20746f206e6f6e2d636f6e7472616374",
                        "id": 1767,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "16691:38:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c79cc78e4f16ce3933a42b84c73868f93bb4a59c031a0acf576679de98c608a9",
                          "typeString": "literal_string \"Address: static call to non-contract\""
                        },
                        "value": "Address: static call to non-contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c79cc78e4f16ce3933a42b84c73868f93bb4a59c031a0acf576679de98c608a9",
                          "typeString": "literal_string \"Address: static call to non-contract\""
                        }
                      ],
                      "id": 1763,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "16663:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16663:67:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1769,
                  "nodeType": "ExpressionStatement",
                  "src": "16663:67:2"
                },
                {
                  "assignments": [
                    1771,
                    1773
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1771,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "16747:7:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1785,
                      "src": "16742:12:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1770,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "16742:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1773,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "16769:10:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1785,
                      "src": "16756:23:2",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1772,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "16756:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1778,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1776,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1756,
                        "src": "16801:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 1774,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1754,
                        "src": "16783:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 1775,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "staticcall",
                      "nodeType": "MemberAccess",
                      "src": "16783:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                      }
                    },
                    "id": 1777,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16783:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16741:65:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1780,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1771,
                        "src": "16841:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1781,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1773,
                        "src": "16850:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1782,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1758,
                        "src": "16862:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1779,
                      "name": "_verifyCallResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1868,
                      "src": "16823:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bool,bytes memory,string memory) pure returns (bytes memory)"
                      }
                    },
                    "id": 1783,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16823:52:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1762,
                  "id": 1784,
                  "nodeType": "Return",
                  "src": "16816:59:2"
                }
              ]
            },
            "documentation": {
              "id": 1752,
              "nodeType": "StructuredDocumentation",
              "src": "16317:173:2",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n but performing a static call.\n _Available since v3.3._"
            },
            "id": 1786,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionStaticCall",
            "nameLocation": "16504:18:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1754,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "16540:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1786,
                  "src": "16532:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1753,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16532:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1756,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "16569:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1786,
                  "src": "16556:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1755,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "16556:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1758,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "16597:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1786,
                  "src": "16583:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1757,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16583:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16522:93:2"
            },
            "returnParameters": {
              "id": 1762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1761,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1786,
                  "src": "16639:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1760,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "16639:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16638:14:2"
            },
            "scope": 1869,
            "src": "16495:387:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1802,
              "nodeType": "Block",
              "src": "17158:101:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1797,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1789,
                        "src": "17196:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1798,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1791,
                        "src": "17204:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564",
                        "id": 1799,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "17210:41:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9fdcd12e4b726339b32a442b0a448365d5d85c96b2d2cff917b4f66c63110398",
                          "typeString": "literal_string \"Address: low-level delegate call failed\""
                        },
                        "value": "Address: low-level delegate call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9fdcd12e4b726339b32a442b0a448365d5d85c96b2d2cff917b4f66c63110398",
                          "typeString": "literal_string \"Address: low-level delegate call failed\""
                        }
                      ],
                      "id": 1796,
                      "name": "functionDelegateCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1803,
                        1838
                      ],
                      "referencedDeclaration": 1838,
                      "src": "17175:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1800,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17175:77:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1795,
                  "id": 1801,
                  "nodeType": "Return",
                  "src": "17168:84:2"
                }
              ]
            },
            "documentation": {
              "id": 1787,
              "nodeType": "StructuredDocumentation",
              "src": "16888:168:2",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a delegate call.\n _Available since v3.4._"
            },
            "id": 1803,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionDelegateCall",
            "nameLocation": "17070:20:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1789,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "17099:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1803,
                  "src": "17091:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1788,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17091:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1791,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "17120:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1803,
                  "src": "17107:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1790,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17107:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17090:35:2"
            },
            "returnParameters": {
              "id": 1795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1794,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1803,
                  "src": "17144:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1793,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17144:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17143:14:2"
            },
            "scope": 1869,
            "src": "17061:198:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1837,
              "nodeType": "Block",
              "src": "17600:233:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1817,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1806,
                            "src": "17629:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 1816,
                          "name": "isContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1593,
                          "src": "17618:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1818,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "17618:18:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374",
                        "id": 1819,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "17638:40:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b94ded0918034cf8f896e19fa3cfdef1188cd569c577264a3622e49152f88520",
                          "typeString": "literal_string \"Address: delegate call to non-contract\""
                        },
                        "value": "Address: delegate call to non-contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b94ded0918034cf8f896e19fa3cfdef1188cd569c577264a3622e49152f88520",
                          "typeString": "literal_string \"Address: delegate call to non-contract\""
                        }
                      ],
                      "id": 1815,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "17610:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1820,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17610:69:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1821,
                  "nodeType": "ExpressionStatement",
                  "src": "17610:69:2"
                },
                {
                  "assignments": [
                    1823,
                    1825
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1823,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "17696:7:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1837,
                      "src": "17691:12:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1822,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "17691:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1825,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "17718:10:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1837,
                      "src": "17705:23:2",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1824,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "17705:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1830,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1828,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1808,
                        "src": "17752:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 1826,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1806,
                        "src": "17732:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 1827,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "delegatecall",
                      "nodeType": "MemberAccess",
                      "src": "17732:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) returns (bool,bytes memory)"
                      }
                    },
                    "id": 1829,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17732:25:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "17690:67:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1832,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1823,
                        "src": "17792:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1833,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1825,
                        "src": "17801:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1834,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1810,
                        "src": "17813:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1831,
                      "name": "_verifyCallResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1868,
                      "src": "17774:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bool,bytes memory,string memory) pure returns (bytes memory)"
                      }
                    },
                    "id": 1835,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17774:52:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1814,
                  "id": 1836,
                  "nodeType": "Return",
                  "src": "17767:59:2"
                }
              ]
            },
            "documentation": {
              "id": 1804,
              "nodeType": "StructuredDocumentation",
              "src": "17265:175:2",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n but performing a delegate call.\n _Available since v3.4._"
            },
            "id": 1838,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionDelegateCall",
            "nameLocation": "17454:20:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1806,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "17492:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1838,
                  "src": "17484:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1805,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17484:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1808,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "17521:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1838,
                  "src": "17508:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1807,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17508:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1810,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "17549:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1838,
                  "src": "17535:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1809,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17535:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17474:93:2"
            },
            "returnParameters": {
              "id": 1814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1813,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1838,
                  "src": "17586:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1812,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17586:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17585:14:2"
            },
            "scope": 1869,
            "src": "17445:388:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1867,
              "nodeType": "Block",
              "src": "17999:532:2",
              "statements": [
                {
                  "condition": {
                    "id": 1849,
                    "name": "success",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1840,
                    "src": "18013:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1865,
                    "nodeType": "Block",
                    "src": "18070:455:2",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1856,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 1853,
                              "name": "returndata",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1842,
                              "src": "18154:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 1854,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "18154:17:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 1855,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "18174:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "18154:21:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 1863,
                          "nodeType": "Block",
                          "src": "18462:53:2",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 1860,
                                    "name": "errorMessage",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1844,
                                    "src": "18487:12:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "id": 1859,
                                  "name": "revert",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    4294967277,
                                    4294967277
                                  ],
                                  "referencedDeclaration": 4294967277,
                                  "src": "18480:6:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory) pure"
                                  }
                                },
                                "id": 1861,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "18480:20:2",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 1862,
                              "nodeType": "ExpressionStatement",
                              "src": "18480:20:2"
                            }
                          ]
                        },
                        "id": 1864,
                        "nodeType": "IfStatement",
                        "src": "18150:365:2",
                        "trueBody": {
                          "id": 1858,
                          "nodeType": "Block",
                          "src": "18177:279:2",
                          "statements": [
                            {
                              "AST": {
                                "nodeType": "YulBlock",
                                "src": "18297:145:2",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "18319:40:2",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "returndata",
                                          "nodeType": "YulIdentifier",
                                          "src": "18348:10:2"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "18342:5:2"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "18342:17:2"
                                    },
                                    "variables": [
                                      {
                                        "name": "returndata_size",
                                        "nodeType": "YulTypedName",
                                        "src": "18323:15:2",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "18391:2:2",
                                              "type": "",
                                              "value": "32"
                                            },
                                            {
                                              "name": "returndata",
                                              "nodeType": "YulIdentifier",
                                              "src": "18395:10:2"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "18387:3:2"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "18387:19:2"
                                        },
                                        {
                                          "name": "returndata_size",
                                          "nodeType": "YulIdentifier",
                                          "src": "18408:15:2"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nodeType": "YulIdentifier",
                                        "src": "18380:6:2"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "18380:44:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "18380:44:2"
                                  }
                                ]
                              },
                              "evmVersion": "london",
                              "externalReferences": [
                                {
                                  "declaration": 1842,
                                  "isOffset": false,
                                  "isSlot": false,
                                  "src": "18348:10:2",
                                  "valueSize": 1
                                },
                                {
                                  "declaration": 1842,
                                  "isOffset": false,
                                  "isSlot": false,
                                  "src": "18395:10:2",
                                  "valueSize": 1
                                }
                              ],
                              "id": 1857,
                              "nodeType": "InlineAssembly",
                              "src": "18288:154:2"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": 1866,
                  "nodeType": "IfStatement",
                  "src": "18009:516:2",
                  "trueBody": {
                    "id": 1852,
                    "nodeType": "Block",
                    "src": "18022:42:2",
                    "statements": [
                      {
                        "expression": {
                          "id": 1850,
                          "name": "returndata",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1842,
                          "src": "18043:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "functionReturnParameters": 1848,
                        "id": 1851,
                        "nodeType": "Return",
                        "src": "18036:17:2"
                      }
                    ]
                  }
                }
              ]
            },
            "id": 1868,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_verifyCallResult",
            "nameLocation": "17848:17:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1840,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "17880:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1868,
                  "src": "17875:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1839,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "17875:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1842,
                  "mutability": "mutable",
                  "name": "returndata",
                  "nameLocation": "17910:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1868,
                  "src": "17897:23:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1841,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17897:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1844,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "17944:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1868,
                  "src": "17930:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1843,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17930:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17865:97:2"
            },
            "returnParameters": {
              "id": 1848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1847,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1868,
                  "src": "17985:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1846,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17985:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17984:14:2"
            },
            "scope": 1869,
            "src": "17839:692:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "scope": 1870,
        "src": "11015:7518:2",
        "usedErrors": []
      }
    ],
    "src": "39:18495:2"
  },
  "legacyAST": {
    "absolutePath": "/Users/macbookpro4eric/Projects/blockchain/project56_vanillaTs_dapp_boilerplate/contracts/Utils.sol",
    "exportedSymbols": {
      "Address": [
        1869
      ],
      "Context": [
        1166
      ],
      "IERC20": [
        1241
      ],
      "Ownable": [
        1576
      ],
      "ReentrancyGuard": [
        1278
      ],
      "SafeMath": [
        1471
      ]
    },
    "id": 1870,
    "license": "UNLICENSED",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1145,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "39:23:2"
      },
      {
        "abstract": true,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 1166,
        "linearizedBaseContracts": [
          1166
        ],
        "name": "Context",
        "nameLocation": "83:7:2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1153,
              "nodeType": "Block",
              "src": "159:34:2",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "id": 1150,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "176:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 1151,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "src": "176:10:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1149,
                  "id": 1152,
                  "nodeType": "Return",
                  "src": "169:17:2"
                }
              ]
            },
            "id": 1154,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgSender",
            "nameLocation": "106:10:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1146,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "116:2:2"
            },
            "returnParameters": {
              "id": 1149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1148,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1154,
                  "src": "150:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1147,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "150:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "149:9:2"
            },
            "scope": 1166,
            "src": "97:96:2",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1164,
              "nodeType": "Block",
              "src": "264:165:2",
              "statements": [
                {
                  "expression": {
                    "id": 1159,
                    "name": "this",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4294967268,
                    "src": "274:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Context_$1166",
                      "typeString": "contract Context"
                    }
                  },
                  "id": 1160,
                  "nodeType": "ExpressionStatement",
                  "src": "274:4:2"
                },
                {
                  "expression": {
                    "expression": {
                      "id": 1161,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4294967281,
                      "src": "414:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 1162,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "data",
                    "nodeType": "MemberAccess",
                    "src": "414:8:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_calldata_ptr",
                      "typeString": "bytes calldata"
                    }
                  },
                  "functionReturnParameters": 1158,
                  "id": 1163,
                  "nodeType": "Return",
                  "src": "407:15:2"
                }
              ]
            },
            "id": 1165,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_msgData",
            "nameLocation": "208:8:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1155,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "216:2:2"
            },
            "returnParameters": {
              "id": 1158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1157,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1165,
                  "src": "250:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1156,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "250:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "249:14:2"
            },
            "scope": 1166,
            "src": "199:230:2",
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "scope": 1870,
        "src": "65:366:2",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "id": 1241,
        "linearizedBaseContracts": [
          1241
        ],
        "name": "IERC20",
        "nameLocation": "444:6:2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "documentation": {
              "id": 1167,
              "nodeType": "StructuredDocumentation",
              "src": "457:66:2",
              "text": " @dev Returns the amount of tokens in existence."
            },
            "functionSelector": "18160ddd",
            "id": 1172,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "537:11:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1168,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "548:2:2"
            },
            "returnParameters": {
              "id": 1171,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1170,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1172,
                  "src": "574:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1169,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "574:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "573:9:2"
            },
            "scope": 1241,
            "src": "528:55:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1173,
              "nodeType": "StructuredDocumentation",
              "src": "589:72:2",
              "text": " @dev Returns the amount of tokens owned by `account`."
            },
            "functionSelector": "70a08231",
            "id": 1180,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "675:9:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1175,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "693:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1180,
                  "src": "685:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1174,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "685:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "684:17:2"
            },
            "returnParameters": {
              "id": 1179,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1178,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1180,
                  "src": "725:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1177,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "725:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "724:9:2"
            },
            "scope": 1241,
            "src": "666:68:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1181,
              "nodeType": "StructuredDocumentation",
              "src": "740:209:2",
              "text": " @dev Moves `amount` tokens from the caller's account to `recipient`.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
            },
            "functionSelector": "a9059cbb",
            "id": 1190,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nameLocation": "963:8:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1186,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1183,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "980:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1190,
                  "src": "972:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1182,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "972:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1185,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "999:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1190,
                  "src": "991:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1184,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "991:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "971:35:2"
            },
            "returnParameters": {
              "id": 1189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1188,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1190,
                  "src": "1025:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1187,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1025:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1024:6:2"
            },
            "scope": 1241,
            "src": "954:77:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1191,
              "nodeType": "StructuredDocumentation",
              "src": "1037:264:2",
              "text": " @dev Returns the remaining number of tokens that `spender` will be\n allowed to spend on behalf of `owner` through {transferFrom}. This is\n zero by default.\n This value changes when {approve} or {transferFrom} are called."
            },
            "functionSelector": "dd62ed3e",
            "id": 1200,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "allowance",
            "nameLocation": "1315:9:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1193,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "1333:5:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1200,
                  "src": "1325:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1192,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1325:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1195,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1348:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1200,
                  "src": "1340:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1194,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1340:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1324:32:2"
            },
            "returnParameters": {
              "id": 1199,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1198,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1200,
                  "src": "1380:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1197,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1380:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1379:9:2"
            },
            "scope": 1241,
            "src": "1306:83:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1201,
              "nodeType": "StructuredDocumentation",
              "src": "1395:642:2",
              "text": " @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n Returns a boolean value indicating whether the operation succeeded.\n IMPORTANT: Beware that changing an allowance with this method brings the risk\n that someone may use both the old and the new allowance by unfortunate\n transaction ordering. One possible solution to mitigate this race\n condition is to first reduce the spender's allowance to 0 and set the\n desired value afterwards:\n https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n Emits an {Approval} event."
            },
            "functionSelector": "095ea7b3",
            "id": 1210,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "2051:7:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1206,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1203,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2067:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1210,
                  "src": "2059:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1202,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2059:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1205,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2084:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1210,
                  "src": "2076:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1204,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2076:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2058:33:2"
            },
            "returnParameters": {
              "id": 1209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1208,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1210,
                  "src": "2110:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1207,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2110:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2109:6:2"
            },
            "scope": 1241,
            "src": "2042:74:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 1211,
              "nodeType": "StructuredDocumentation",
              "src": "2122:296:2",
              "text": " @dev Moves `amount` tokens from `sender` to `recipient` using the\n allowance mechanism. `amount` is then deducted from the caller's\n allowance.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
            },
            "functionSelector": "23b872dd",
            "id": 1222,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "2432:12:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1213,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "2453:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1222,
                  "src": "2445:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1212,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2445:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1215,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "2469:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1222,
                  "src": "2461:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1214,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2461:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1217,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2488:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1222,
                  "src": "2480:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1216,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2480:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2444:51:2"
            },
            "returnParameters": {
              "id": 1221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1220,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1222,
                  "src": "2514:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1219,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2514:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2513:6:2"
            },
            "scope": 1241,
            "src": "2423:97:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": {
              "id": 1223,
              "nodeType": "StructuredDocumentation",
              "src": "2526:158:2",
              "text": " @dev Emitted when `value` tokens are moved from one account (`from`) to\n another (`to`).\n Note that `value` may be zero."
            },
            "id": 1231,
            "name": "Transfer",
            "nameLocation": "2695:8:2",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1230,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1225,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "2720:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1231,
                  "src": "2704:20:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1224,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2704:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1227,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "2742:2:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1231,
                  "src": "2726:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1226,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2726:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1229,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2754:5:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1231,
                  "src": "2746:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1228,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2746:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2703:57:2"
            },
            "src": "2689:72:2"
          },
          {
            "anonymous": false,
            "documentation": {
              "id": 1232,
              "nodeType": "StructuredDocumentation",
              "src": "2767:148:2",
              "text": " @dev Emitted when the allowance of a `spender` for an `owner` is set by\n a call to {approve}. `value` is the new allowance."
            },
            "id": 1240,
            "name": "Approval",
            "nameLocation": "2926:8:2",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1239,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1234,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2951:5:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1240,
                  "src": "2935:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1233,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2935:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1236,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2974:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1240,
                  "src": "2958:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1235,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2958:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1238,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2991:5:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1240,
                  "src": "2983:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1237,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2983:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2934:63:2"
            },
            "src": "2920:78:2"
          }
        ],
        "scope": 1870,
        "src": "434:2566:2",
        "usedErrors": []
      },
      {
        "abstract": true,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 1278,
        "linearizedBaseContracts": [
          1278
        ],
        "name": "ReentrancyGuard",
        "nameLocation": "3020:15:2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 1244,
            "mutability": "constant",
            "name": "_NOT_ENTERED",
            "nameLocation": "3815:12:2",
            "nodeType": "VariableDeclaration",
            "scope": 1278,
            "src": "3790:41:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1242,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3790:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31",
              "id": 1243,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3830:1:2",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 1247,
            "mutability": "constant",
            "name": "_ENTERED",
            "nameLocation": "3862:8:2",
            "nodeType": "VariableDeclaration",
            "scope": 1278,
            "src": "3837:37:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1245,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3837:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "32",
              "id": 1246,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "3873:1:2",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2_by_1",
                "typeString": "int_const 2"
              },
              "value": "2"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 1249,
            "mutability": "mutable",
            "name": "_status",
            "nameLocation": "3897:7:2",
            "nodeType": "VariableDeclaration",
            "scope": 1278,
            "src": "3881:23:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1248,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3881:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 1256,
              "nodeType": "Block",
              "src": "3925:39:2",
              "statements": [
                {
                  "expression": {
                    "id": 1254,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1252,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1249,
                      "src": "3935:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1253,
                      "name": "_NOT_ENTERED",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1244,
                      "src": "3945:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3935:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1255,
                  "nodeType": "ExpressionStatement",
                  "src": "3935:22:2"
                }
              ]
            },
            "id": 1257,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1250,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3922:2:2"
            },
            "returnParameters": {
              "id": 1251,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3925:0:2"
            },
            "scope": 1278,
            "src": "3911:53:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1276,
              "nodeType": "Block",
              "src": "4363:421:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1263,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1261,
                          "name": "_status",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1249,
                          "src": "4452:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "id": 1262,
                          "name": "_ENTERED",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1247,
                          "src": "4463:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4452:19:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "5265656e7472616e637947756172643a207265656e7472616e742063616c6c",
                        "id": 1264,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4473:33:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ebf73bba305590e4764d5cb53b69bffd6d4d092d1a67551cb346f8cfcdab8619",
                          "typeString": "literal_string \"ReentrancyGuard: reentrant call\""
                        },
                        "value": "ReentrancyGuard: reentrant call"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_ebf73bba305590e4764d5cb53b69bffd6d4d092d1a67551cb346f8cfcdab8619",
                          "typeString": "literal_string \"ReentrancyGuard: reentrant call\""
                        }
                      ],
                      "id": 1260,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "4444:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1265,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4444:63:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1266,
                  "nodeType": "ExpressionStatement",
                  "src": "4444:63:2"
                },
                {
                  "expression": {
                    "id": 1269,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1267,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1249,
                      "src": "4582:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1268,
                      "name": "_ENTERED",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1247,
                      "src": "4592:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4582:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1270,
                  "nodeType": "ExpressionStatement",
                  "src": "4582:18:2"
                },
                {
                  "id": 1271,
                  "nodeType": "PlaceholderStatement",
                  "src": "4611:1:2"
                },
                {
                  "expression": {
                    "id": 1274,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1272,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1249,
                      "src": "4755:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1273,
                      "name": "_NOT_ENTERED",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1244,
                      "src": "4765:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4755:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1275,
                  "nodeType": "ExpressionStatement",
                  "src": "4755:22:2"
                }
              ]
            },
            "documentation": {
              "id": 1258,
              "nodeType": "StructuredDocumentation",
              "src": "3970:364:2",
              "text": " @dev Prevents a contract from calling itself, directly or indirectly.\n Calling a `nonReentrant` function from another `nonReentrant`\n function is not supported. It is possible to prevent this from happening\n by making the `nonReentrant` function external, and make it call a\n `private` function that does the actual work."
            },
            "id": 1277,
            "name": "nonReentrant",
            "nameLocation": "4348:12:2",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1259,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4360:2:2"
            },
            "src": "4339:445:2",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 1870,
        "src": "3002:1784:2",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "fullyImplemented": true,
        "id": 1471,
        "linearizedBaseContracts": [
          1471
        ],
        "name": "SafeMath",
        "nameLocation": "4797:8:2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1303,
              "nodeType": "Block",
              "src": "5108:109:2",
              "statements": [
                {
                  "assignments": [
                    1289
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1289,
                      "mutability": "mutable",
                      "name": "c",
                      "nameLocation": "5126:1:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1303,
                      "src": "5118:9:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1288,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5118:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1293,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1292,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1290,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1281,
                      "src": "5130:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "id": 1291,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1283,
                      "src": "5134:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5130:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5118:17:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1297,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1295,
                          "name": "c",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1289,
                          "src": "5153:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 1296,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1281,
                          "src": "5158:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5153:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "536166654d6174683a206164646974696f6e206f766572666c6f77",
                        "id": 1298,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5161:29:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_30cc447bcc13b3e22b45cef0dd9b0b514842d836dd9b6eb384e20dedfb47723a",
                          "typeString": "literal_string \"SafeMath: addition overflow\""
                        },
                        "value": "SafeMath: addition overflow"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_30cc447bcc13b3e22b45cef0dd9b0b514842d836dd9b6eb384e20dedfb47723a",
                          "typeString": "literal_string \"SafeMath: addition overflow\""
                        }
                      ],
                      "id": 1294,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "5145:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1299,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5145:46:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1300,
                  "nodeType": "ExpressionStatement",
                  "src": "5145:46:2"
                },
                {
                  "expression": {
                    "id": 1301,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1289,
                    "src": "5209:1:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1287,
                  "id": 1302,
                  "nodeType": "Return",
                  "src": "5202:8:2"
                }
              ]
            },
            "documentation": {
              "id": 1279,
              "nodeType": "StructuredDocumentation",
              "src": "4812:224:2",
              "text": " @dev Returns the addition of two unsigned integers, reverting on\n overflow.\n Counterpart to Solidity's `+` operator.\n Requirements:\n - Addition cannot overflow."
            },
            "id": 1304,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "add",
            "nameLocation": "5050:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1281,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "5062:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1304,
                  "src": "5054:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1280,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5054:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1283,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "5073:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1304,
                  "src": "5065:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1282,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5065:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5053:22:2"
            },
            "returnParameters": {
              "id": 1287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1286,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1304,
                  "src": "5099:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1285,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5099:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5098:9:2"
            },
            "scope": 1471,
            "src": "5041:176:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1320,
              "nodeType": "Block",
              "src": "5555:67:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1315,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1307,
                        "src": "5576:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1316,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1309,
                        "src": "5579:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "536166654d6174683a207375627472616374696f6e206f766572666c6f77",
                        "id": 1317,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5582:32:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_50b058e9b5320e58880d88223c9801cd9eecdcf90323d5c2318bc1b6b916e862",
                          "typeString": "literal_string \"SafeMath: subtraction overflow\""
                        },
                        "value": "SafeMath: subtraction overflow"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_50b058e9b5320e58880d88223c9801cd9eecdcf90323d5c2318bc1b6b916e862",
                          "typeString": "literal_string \"SafeMath: subtraction overflow\""
                        }
                      ],
                      "id": 1314,
                      "name": "sub",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1321,
                        1349
                      ],
                      "referencedDeclaration": 1349,
                      "src": "5572:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,string memory) pure returns (uint256)"
                      }
                    },
                    "id": 1318,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5572:43:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1313,
                  "id": 1319,
                  "nodeType": "Return",
                  "src": "5565:50:2"
                }
              ]
            },
            "documentation": {
              "id": 1305,
              "nodeType": "StructuredDocumentation",
              "src": "5223:260:2",
              "text": " @dev Returns the subtraction of two unsigned integers, reverting on\n overflow (when the result is negative).\n Counterpart to Solidity's `-` operator.\n Requirements:\n - Subtraction cannot overflow."
            },
            "id": 1321,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sub",
            "nameLocation": "5497:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1310,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1307,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "5509:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1321,
                  "src": "5501:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1306,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5501:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1309,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "5520:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1321,
                  "src": "5512:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1308,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5512:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5500:22:2"
            },
            "returnParameters": {
              "id": 1313,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1312,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1321,
                  "src": "5546:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1311,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5546:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5545:9:2"
            },
            "scope": 1471,
            "src": "5488:134:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1348,
              "nodeType": "Block",
              "src": "6008:92:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1336,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1334,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1326,
                          "src": "6026:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 1335,
                          "name": "a",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1324,
                          "src": "6031:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6026:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1337,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1328,
                        "src": "6034:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1333,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "6018:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1338,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6018:29:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1339,
                  "nodeType": "ExpressionStatement",
                  "src": "6018:29:2"
                },
                {
                  "assignments": [
                    1341
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1341,
                      "mutability": "mutable",
                      "name": "c",
                      "nameLocation": "6065:1:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1348,
                      "src": "6057:9:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1340,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6057:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1345,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1344,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1342,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1324,
                      "src": "6069:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 1343,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1326,
                      "src": "6073:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6069:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6057:17:2"
                },
                {
                  "expression": {
                    "id": 1346,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1341,
                    "src": "6092:1:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1332,
                  "id": 1347,
                  "nodeType": "Return",
                  "src": "6085:8:2"
                }
              ]
            },
            "documentation": {
              "id": 1322,
              "nodeType": "StructuredDocumentation",
              "src": "5628:280:2",
              "text": " @dev Returns the subtraction of two unsigned integers, reverting with custom message on\n overflow (when the result is negative).\n Counterpart to Solidity's `-` operator.\n Requirements:\n - Subtraction cannot overflow."
            },
            "id": 1349,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sub",
            "nameLocation": "5922:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1329,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1324,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "5934:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1349,
                  "src": "5926:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1323,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5926:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1326,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "5945:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1349,
                  "src": "5937:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1325,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5937:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1328,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "5962:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1349,
                  "src": "5948:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1327,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5948:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5925:50:2"
            },
            "returnParameters": {
              "id": 1332,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1331,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1349,
                  "src": "5999:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1330,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5999:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5998:9:2"
            },
            "scope": 1471,
            "src": "5913:187:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1383,
              "nodeType": "Block",
              "src": "6414:392:2",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1361,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1359,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1352,
                      "src": "6646:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 1360,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6651:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6646:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1365,
                  "nodeType": "IfStatement",
                  "src": "6642:45:2",
                  "trueBody": {
                    "id": 1364,
                    "nodeType": "Block",
                    "src": "6654:33:2",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 1362,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6675:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 1358,
                        "id": 1363,
                        "nodeType": "Return",
                        "src": "6668:8:2"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    1367
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1367,
                      "mutability": "mutable",
                      "name": "c",
                      "nameLocation": "6705:1:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1383,
                      "src": "6697:9:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1366,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6697:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1371,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1370,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1368,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1352,
                      "src": "6709:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "id": 1369,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1354,
                      "src": "6713:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6709:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6697:17:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1377,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1375,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 1373,
                            "name": "c",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1367,
                            "src": "6732:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "id": 1374,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1352,
                            "src": "6736:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6732:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "id": 1376,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1354,
                          "src": "6741:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6732:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77",
                        "id": 1378,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6744:35:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9113bb53c2876a3805b2c9242029423fc540a728243ce887ab24c82cf119fba3",
                          "typeString": "literal_string \"SafeMath: multiplication overflow\""
                        },
                        "value": "SafeMath: multiplication overflow"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9113bb53c2876a3805b2c9242029423fc540a728243ce887ab24c82cf119fba3",
                          "typeString": "literal_string \"SafeMath: multiplication overflow\""
                        }
                      ],
                      "id": 1372,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "6724:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1379,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6724:56:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1380,
                  "nodeType": "ExpressionStatement",
                  "src": "6724:56:2"
                },
                {
                  "expression": {
                    "id": 1381,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1367,
                    "src": "6798:1:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1358,
                  "id": 1382,
                  "nodeType": "Return",
                  "src": "6791:8:2"
                }
              ]
            },
            "documentation": {
              "id": 1350,
              "nodeType": "StructuredDocumentation",
              "src": "6106:236:2",
              "text": " @dev Returns the multiplication of two unsigned integers, reverting on\n overflow.\n Counterpart to Solidity's `*` operator.\n Requirements:\n - Multiplication cannot overflow."
            },
            "id": 1384,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mul",
            "nameLocation": "6356:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1352,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "6368:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1384,
                  "src": "6360:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1351,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6360:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1354,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "6379:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1384,
                  "src": "6371:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1353,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6371:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6359:22:2"
            },
            "returnParameters": {
              "id": 1358,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1357,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1384,
                  "src": "6405:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1356,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6405:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6404:9:2"
            },
            "scope": 1471,
            "src": "6347:459:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1400,
              "nodeType": "Block",
              "src": "7335:63:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1395,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1387,
                        "src": "7356:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1396,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1389,
                        "src": "7359:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "536166654d6174683a206469766973696f6e206279207a65726f",
                        "id": 1397,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7362:28:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5b7cc70dda4dc2143e5adb63bd5d1f349504f461dbdfd9bc76fac1f8ca6d019f",
                          "typeString": "literal_string \"SafeMath: division by zero\""
                        },
                        "value": "SafeMath: division by zero"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5b7cc70dda4dc2143e5adb63bd5d1f349504f461dbdfd9bc76fac1f8ca6d019f",
                          "typeString": "literal_string \"SafeMath: division by zero\""
                        }
                      ],
                      "id": 1394,
                      "name": "div",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1401,
                        1429
                      ],
                      "referencedDeclaration": 1429,
                      "src": "7352:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,string memory) pure returns (uint256)"
                      }
                    },
                    "id": 1398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7352:39:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1393,
                  "id": 1399,
                  "nodeType": "Return",
                  "src": "7345:46:2"
                }
              ]
            },
            "documentation": {
              "id": 1385,
              "nodeType": "StructuredDocumentation",
              "src": "6812:451:2",
              "text": " @dev Returns the integer division of two unsigned integers. Reverts on\n division by zero. The result is rounded towards zero.\n Counterpart to Solidity's `/` operator. Note: this function uses a\n `revert` opcode (which leaves remaining gas untouched) while Solidity\n uses an invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
            },
            "id": 1401,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "div",
            "nameLocation": "7277:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1390,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1387,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "7289:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1401,
                  "src": "7281:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1386,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7281:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1389,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "7300:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1401,
                  "src": "7292:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1388,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7292:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7280:22:2"
            },
            "returnParameters": {
              "id": 1393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1392,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1401,
                  "src": "7326:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1391,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7326:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7325:9:2"
            },
            "scope": 1471,
            "src": "7268:130:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1428,
              "nodeType": "Block",
              "src": "7975:177:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1416,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1414,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1406,
                          "src": "7993:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 1415,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7997:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "7993:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1417,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1408,
                        "src": "8000:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1413,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "7985:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7985:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1419,
                  "nodeType": "ExpressionStatement",
                  "src": "7985:28:2"
                },
                {
                  "assignments": [
                    1421
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1421,
                      "mutability": "mutable",
                      "name": "c",
                      "nameLocation": "8031:1:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1428,
                      "src": "8023:9:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1420,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8023:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1425,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1424,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1422,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1404,
                      "src": "8035:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "id": 1423,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1406,
                      "src": "8039:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8035:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8023:17:2"
                },
                {
                  "expression": {
                    "id": 1426,
                    "name": "c",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1421,
                    "src": "8144:1:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1412,
                  "id": 1427,
                  "nodeType": "Return",
                  "src": "8137:8:2"
                }
              ]
            },
            "documentation": {
              "id": 1402,
              "nodeType": "StructuredDocumentation",
              "src": "7404:471:2",
              "text": " @dev Returns the integer division of two unsigned integers. Reverts with custom message on\n division by zero. The result is rounded towards zero.\n Counterpart to Solidity's `/` operator. Note: this function uses a\n `revert` opcode (which leaves remaining gas untouched) while Solidity\n uses an invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
            },
            "id": 1429,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "div",
            "nameLocation": "7889:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1409,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1404,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "7901:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1429,
                  "src": "7893:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1403,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7893:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1406,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "7912:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1429,
                  "src": "7904:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1405,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7904:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1408,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "7929:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1429,
                  "src": "7915:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1407,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7915:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7892:50:2"
            },
            "returnParameters": {
              "id": 1412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1411,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1429,
                  "src": "7966:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1410,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7966:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7965:9:2"
            },
            "scope": 1471,
            "src": "7880:272:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1445,
              "nodeType": "Block",
              "src": "8670:61:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1440,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1432,
                        "src": "8691:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1441,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1434,
                        "src": "8694:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "536166654d6174683a206d6f64756c6f206279207a65726f",
                        "id": 1442,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8697:26:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_726e51f7b81fce0a68f5f214f445e275313b20b1633f08ce954ee39abf8d7832",
                          "typeString": "literal_string \"SafeMath: modulo by zero\""
                        },
                        "value": "SafeMath: modulo by zero"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_726e51f7b81fce0a68f5f214f445e275313b20b1633f08ce954ee39abf8d7832",
                          "typeString": "literal_string \"SafeMath: modulo by zero\""
                        }
                      ],
                      "id": 1439,
                      "name": "mod",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1446,
                        1470
                      ],
                      "referencedDeclaration": 1470,
                      "src": "8687:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,string memory) pure returns (uint256)"
                      }
                    },
                    "id": 1443,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8687:37:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1438,
                  "id": 1444,
                  "nodeType": "Return",
                  "src": "8680:44:2"
                }
              ]
            },
            "documentation": {
              "id": 1430,
              "nodeType": "StructuredDocumentation",
              "src": "8158:440:2",
              "text": " @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\n Reverts when dividing by zero.\n Counterpart to Solidity's `%` operator. This function uses a `revert`\n opcode (which leaves remaining gas untouched) while Solidity uses an\n invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
            },
            "id": 1446,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mod",
            "nameLocation": "8612:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1435,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1432,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "8624:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1446,
                  "src": "8616:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1431,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8616:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1434,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "8635:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1446,
                  "src": "8627:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1433,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8627:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8615:22:2"
            },
            "returnParameters": {
              "id": 1438,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1437,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1446,
                  "src": "8661:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1436,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8661:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8660:9:2"
            },
            "scope": 1471,
            "src": "8603:128:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1469,
              "nodeType": "Block",
              "src": "9297:68:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1461,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1459,
                          "name": "b",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1451,
                          "src": "9315:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 1460,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9320:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9315:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1462,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1453,
                        "src": "9323:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1458,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "9307:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1463,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9307:29:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1464,
                  "nodeType": "ExpressionStatement",
                  "src": "9307:29:2"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1467,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1465,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1449,
                      "src": "9353:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "id": 1466,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1451,
                      "src": "9357:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9353:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1457,
                  "id": 1468,
                  "nodeType": "Return",
                  "src": "9346:12:2"
                }
              ]
            },
            "documentation": {
              "id": 1447,
              "nodeType": "StructuredDocumentation",
              "src": "8737:460:2",
              "text": " @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\n Reverts with custom message when dividing by zero.\n Counterpart to Solidity's `%` operator. This function uses a `revert`\n opcode (which leaves remaining gas untouched) while Solidity uses an\n invalid opcode to revert (consuming all remaining gas).\n Requirements:\n - The divisor cannot be zero."
            },
            "id": 1470,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mod",
            "nameLocation": "9211:3:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1454,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1449,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "9223:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1470,
                  "src": "9215:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1448,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9215:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1451,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "9234:1:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1470,
                  "src": "9226:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1450,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9226:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1453,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "9251:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1470,
                  "src": "9237:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1452,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9237:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9214:50:2"
            },
            "returnParameters": {
              "id": 1457,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1456,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1470,
                  "src": "9288:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1455,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9288:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9287:9:2"
            },
            "scope": 1471,
            "src": "9202:163:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 1870,
        "src": "4789:4578:2",
        "usedErrors": []
      },
      {
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 1472,
              "name": "Context",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1166,
              "src": "9398:7:2"
            },
            "id": 1473,
            "nodeType": "InheritanceSpecifier",
            "src": "9398:7:2"
          }
        ],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 1576,
        "linearizedBaseContracts": [
          1576,
          1166
        ],
        "name": "Ownable",
        "nameLocation": "9387:7:2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1475,
            "mutability": "mutable",
            "name": "_owner",
            "nameLocation": "9428:6:2",
            "nodeType": "VariableDeclaration",
            "scope": 1576,
            "src": "9412:22:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1474,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "9412:7:2",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "anonymous": false,
            "id": 1481,
            "name": "OwnershipTransferred",
            "nameLocation": "9447:20:2",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 1480,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1477,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "previousOwner",
                  "nameLocation": "9484:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1481,
                  "src": "9468:29:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1476,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9468:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1479,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "9515:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1481,
                  "src": "9499:24:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1478,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9499:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9467:57:2"
            },
            "src": "9441:84:2"
          },
          {
            "body": {
              "id": 1502,
              "nodeType": "Block",
              "src": "9642:135:2",
              "statements": [
                {
                  "assignments": [
                    1486
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1486,
                      "mutability": "mutable",
                      "name": "msgSender",
                      "nameLocation": "9660:9:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1502,
                      "src": "9652:17:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 1485,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "9652:7:2",
                        "stateMutability": "nonpayable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1489,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 1487,
                      "name": "_msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1154,
                      "src": "9672:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                        "typeString": "function () view returns (address)"
                      }
                    },
                    "id": 1488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9672:12:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9652:32:2"
                },
                {
                  "expression": {
                    "id": 1492,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1490,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1475,
                      "src": "9694:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1491,
                      "name": "msgSender",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1486,
                      "src": "9703:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "9694:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1493,
                  "nodeType": "ExpressionStatement",
                  "src": "9694:18:2"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 1497,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "9756:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 1496,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "9748:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 1495,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "9748:7:2",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 1498,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9748:10:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1499,
                        "name": "msgSender",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1486,
                        "src": "9760:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1494,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1481,
                      "src": "9727:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 1500,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9727:43:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1501,
                  "nodeType": "EmitStatement",
                  "src": "9722:48:2"
                }
              ]
            },
            "documentation": {
              "id": 1482,
              "nodeType": "StructuredDocumentation",
              "src": "9531:91:2",
              "text": " @dev Initializes the contract setting the deployer as the initial owner."
            },
            "id": 1503,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1483,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9639:2:2"
            },
            "returnParameters": {
              "id": 1484,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9642:0:2"
            },
            "scope": 1576,
            "src": "9627:150:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1511,
              "nodeType": "Block",
              "src": "9900:30:2",
              "statements": [
                {
                  "expression": {
                    "id": 1509,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1475,
                    "src": "9917:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1508,
                  "id": 1510,
                  "nodeType": "Return",
                  "src": "9910:13:2"
                }
              ]
            },
            "documentation": {
              "id": 1504,
              "nodeType": "StructuredDocumentation",
              "src": "9783:65:2",
              "text": " @dev Returns the address of the current owner."
            },
            "functionSelector": "8da5cb5b",
            "id": 1512,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "owner",
            "nameLocation": "9862:5:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1505,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9867:2:2"
            },
            "returnParameters": {
              "id": 1508,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1507,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1512,
                  "src": "9891:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1506,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "9891:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9890:9:2"
            },
            "scope": 1576,
            "src": "9853:77:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1524,
              "nodeType": "Block",
              "src": "10039:95:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1519,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1516,
                          "name": "_owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1475,
                          "src": "10057:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 1517,
                            "name": "_msgSender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1154,
                            "src": "10067:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_address_$",
                              "typeString": "function () view returns (address)"
                            }
                          },
                          "id": 1518,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10067:12:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "10057:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "id": 1520,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10081:34:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                          "typeString": "literal_string \"Ownable: caller is not the owner\""
                        },
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                          "typeString": "literal_string \"Ownable: caller is not the owner\""
                        }
                      ],
                      "id": 1515,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "10049:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1521,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10049:67:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1522,
                  "nodeType": "ExpressionStatement",
                  "src": "10049:67:2"
                },
                {
                  "id": 1523,
                  "nodeType": "PlaceholderStatement",
                  "src": "10126:1:2"
                }
              ]
            },
            "documentation": {
              "id": 1513,
              "nodeType": "StructuredDocumentation",
              "src": "9936:77:2",
              "text": " @dev Throws if called by any account other than the owner."
            },
            "id": 1525,
            "name": "onlyOwner",
            "nameLocation": "10027:9:2",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1514,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10036:2:2"
            },
            "src": "10018:116:2",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1546,
              "nodeType": "Block",
              "src": "10530:91:2",
              "statements": [
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 1532,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1475,
                        "src": "10566:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "hexValue": "30",
                            "id": 1535,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "10582:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 1534,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "10574:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 1533,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "10574:7:2",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 1536,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "10574:10:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1531,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1481,
                      "src": "10545:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 1537,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10545:40:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1538,
                  "nodeType": "EmitStatement",
                  "src": "10540:45:2"
                },
                {
                  "expression": {
                    "id": 1544,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1539,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1475,
                      "src": "10595:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 1542,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10612:1:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 1541,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "10604:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 1540,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "10604:7:2",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 1543,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "10604:10:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10595:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1545,
                  "nodeType": "ExpressionStatement",
                  "src": "10595:19:2"
                }
              ]
            },
            "documentation": {
              "id": 1526,
              "nodeType": "StructuredDocumentation",
              "src": "10140:331:2",
              "text": " @dev Leaves the contract without owner. It will not be possible to call\n `onlyOwner` functions anymore. Can only be called by the current owner.\n NOTE: Renouncing ownership will leave the contract without an owner,\n thereby removing any functionality that is only available to the owner."
            },
            "functionSelector": "715018a6",
            "id": 1547,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1529,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1528,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1525,
                  "src": "10520:9:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "10520:9:2"
              }
            ],
            "name": "renounceOwnership",
            "nameLocation": "10485:17:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1527,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10502:2:2"
            },
            "returnParameters": {
              "id": 1530,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10530:0:2"
            },
            "scope": 1576,
            "src": "10476:145:2",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1574,
              "nodeType": "Block",
              "src": "10840:170:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1561,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 1556,
                          "name": "newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1550,
                          "src": "10858:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 1559,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "10878:1:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 1558,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10870:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 1557,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "10870:7:2",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 1560,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10870:10:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "10858:22:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373",
                        "id": 1562,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "10882:40:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                          "typeString": "literal_string \"Ownable: new owner is the zero address\""
                        },
                        "value": "Ownable: new owner is the zero address"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                          "typeString": "literal_string \"Ownable: new owner is the zero address\""
                        }
                      ],
                      "id": 1555,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "10850:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1563,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10850:73:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1564,
                  "nodeType": "ExpressionStatement",
                  "src": "10850:73:2"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 1566,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1475,
                        "src": "10959:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1567,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1550,
                        "src": "10967:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 1565,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1481,
                      "src": "10938:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 1568,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10938:38:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1569,
                  "nodeType": "EmitStatement",
                  "src": "10933:43:2"
                },
                {
                  "expression": {
                    "id": 1572,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 1570,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1475,
                      "src": "10986:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 1571,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1550,
                      "src": "10995:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "10986:17:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1573,
                  "nodeType": "ExpressionStatement",
                  "src": "10986:17:2"
                }
              ]
            },
            "documentation": {
              "id": 1548,
              "nodeType": "StructuredDocumentation",
              "src": "10627:138:2",
              "text": " @dev Transfers ownership of the contract to a new account (`newOwner`).\n Can only be called by the current owner."
            },
            "functionSelector": "f2fde38b",
            "id": 1575,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 1553,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 1552,
                  "name": "onlyOwner",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1525,
                  "src": "10830:9:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "10830:9:2"
              }
            ],
            "name": "transferOwnership",
            "nameLocation": "10779:17:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1551,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1550,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "10805:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1575,
                  "src": "10797:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1549,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "10797:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10796:18:2"
            },
            "returnParameters": {
              "id": 1554,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10840:0:2"
            },
            "scope": 1576,
            "src": "10770:240:2",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "scope": 1870,
        "src": "9369:1643:2",
        "usedErrors": []
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "fullyImplemented": true,
        "id": 1869,
        "linearizedBaseContracts": [
          1869
        ],
        "name": "Address",
        "nameLocation": "11023:7:2",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 1592,
              "nodeType": "Block",
              "src": "11673:311:2",
              "statements": [
                {
                  "assignments": [
                    1585
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1585,
                      "mutability": "mutable",
                      "name": "size",
                      "nameLocation": "11878:4:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1592,
                      "src": "11870:12:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1584,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11870:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1586,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11870:12:2"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "11901:52:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "11915:28:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "account",
                              "nodeType": "YulIdentifier",
                              "src": "11935:7:2"
                            }
                          ],
                          "functionName": {
                            "name": "extcodesize",
                            "nodeType": "YulIdentifier",
                            "src": "11923:11:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11923:20:2"
                        },
                        "variableNames": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "11915:4:2"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "london",
                  "externalReferences": [
                    {
                      "declaration": 1579,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11935:7:2",
                      "valueSize": 1
                    },
                    {
                      "declaration": 1585,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "11915:4:2",
                      "valueSize": 1
                    }
                  ],
                  "id": 1587,
                  "nodeType": "InlineAssembly",
                  "src": "11892:61:2"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1590,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 1588,
                      "name": "size",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1585,
                      "src": "11969:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 1589,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "11976:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "11969:8:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 1583,
                  "id": 1591,
                  "nodeType": "Return",
                  "src": "11962:15:2"
                }
              ]
            },
            "documentation": {
              "id": 1577,
              "nodeType": "StructuredDocumentation",
              "src": "11037:565:2",
              "text": " @dev Returns true if `account` is a contract.\n [IMPORTANT]\n ====\n It is unsafe to assume that an address for which this function returns\n false is an externally-owned account (EOA) and not a contract.\n Among others, `isContract` will return false for the following\n types of addresses:\n  - an externally-owned account\n  - a contract in construction\n  - an address where a contract will be created\n  - an address where a contract lived, but was destroyed\n ===="
            },
            "id": 1593,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isContract",
            "nameLocation": "11616:10:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1579,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "11635:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1593,
                  "src": "11627:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1578,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11627:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11626:17:2"
            },
            "returnParameters": {
              "id": 1583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1582,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1593,
                  "src": "11667:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1581,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11667:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11666:6:2"
            },
            "scope": 1869,
            "src": "11607:377:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1626,
              "nodeType": "Block",
              "src": "12972:241:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1608,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 1604,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967268,
                                "src": "12998:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Address_$1869",
                                  "typeString": "library Address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Address_$1869",
                                  "typeString": "library Address"
                                }
                              ],
                              "id": 1603,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "12990:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 1602,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "12990:7:2",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 1605,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "12990:13:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 1606,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "src": "12990:21:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 1607,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1598,
                          "src": "13015:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "12990:31:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20696e73756666696369656e742062616c616e6365",
                        "id": 1609,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "13023:31:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5597a22abd0ef5332f8053862eb236db7590f17e2b93a53f63a103becfb561f9",
                          "typeString": "literal_string \"Address: insufficient balance\""
                        },
                        "value": "Address: insufficient balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5597a22abd0ef5332f8053862eb236db7590f17e2b93a53f63a103becfb561f9",
                          "typeString": "literal_string \"Address: insufficient balance\""
                        }
                      ],
                      "id": 1601,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "12982:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12982:73:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1611,
                  "nodeType": "ExpressionStatement",
                  "src": "12982:73:2"
                },
                {
                  "assignments": [
                    1613,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1613,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "13072:7:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1626,
                      "src": "13067:12:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1612,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "13067:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 1620,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "",
                        "id": 1618,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "13115:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "id": 1614,
                          "name": "recipient",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1596,
                          "src": "13085:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 1615,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "13085:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 1617,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "id": 1616,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1598,
                          "src": "13107:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "13085:29:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 1619,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13085:33:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13066:52:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1622,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1613,
                        "src": "13136:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564",
                        "id": 1623,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "13145:60:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_51ddaa38748c0a1144620fb5bfe8edab31ea437571ad591a7734bbfd0429aeae",
                          "typeString": "literal_string \"Address: unable to send value, recipient may have reverted\""
                        },
                        "value": "Address: unable to send value, recipient may have reverted"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_51ddaa38748c0a1144620fb5bfe8edab31ea437571ad591a7734bbfd0429aeae",
                          "typeString": "literal_string \"Address: unable to send value, recipient may have reverted\""
                        }
                      ],
                      "id": 1621,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "13128:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1624,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13128:78:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1625,
                  "nodeType": "ExpressionStatement",
                  "src": "13128:78:2"
                }
              ]
            },
            "documentation": {
              "id": 1594,
              "nodeType": "StructuredDocumentation",
              "src": "11990:906:2",
              "text": " @dev Replacement for Solidity's `transfer`: sends `amount` wei to\n `recipient`, forwarding all available gas and reverting on errors.\n https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n of certain opcodes, possibly making contracts go over the 2300 gas limit\n imposed by `transfer`, making them unable to receive funds via\n `transfer`. {sendValue} removes this limitation.\n https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n IMPORTANT: because control is transferred to `recipient`, care must be\n taken to not create reentrancy vulnerabilities. Consider using\n {ReentrancyGuard} or the\n https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]."
            },
            "id": 1627,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sendValue",
            "nameLocation": "12910:9:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1596,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "12936:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1627,
                  "src": "12920:25:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 1595,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12920:15:2",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1598,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "12955:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1627,
                  "src": "12947:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1597,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12947:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12919:43:2"
            },
            "returnParameters": {
              "id": 1600,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12972:0:2"
            },
            "scope": 1869,
            "src": "12901:312:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1643,
              "nodeType": "Block",
              "src": "14044:84:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1638,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1630,
                        "src": "14074:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1639,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1632,
                        "src": "14082:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2063616c6c206661696c6564",
                        "id": 1640,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "14088:32:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_24d7ab5d382116e64324f19950ca9340b8af1ddeb09a8d026e0a3c6a01dcc9df",
                          "typeString": "literal_string \"Address: low-level call failed\""
                        },
                        "value": "Address: low-level call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_24d7ab5d382116e64324f19950ca9340b8af1ddeb09a8d026e0a3c6a01dcc9df",
                          "typeString": "literal_string \"Address: low-level call failed\""
                        }
                      ],
                      "id": 1637,
                      "name": "functionCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1644,
                        1664
                      ],
                      "referencedDeclaration": 1664,
                      "src": "14061:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1641,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14061:60:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1636,
                  "id": 1642,
                  "nodeType": "Return",
                  "src": "14054:67:2"
                }
              ]
            },
            "documentation": {
              "id": 1628,
              "nodeType": "StructuredDocumentation",
              "src": "13219:731:2",
              "text": " @dev Performs a Solidity function call using a low level `call`. A\n plain `call` is an unsafe replacement for a function call: use this\n function instead.\n If `target` reverts with a revert reason, it is bubbled up by this\n function (like regular Solidity function calls).\n Returns the raw returned data. To convert to the expected return value,\n use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n Requirements:\n - `target` must be a contract.\n - calling `target` with `data` must not revert.\n _Available since v3.1._"
            },
            "id": 1644,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCall",
            "nameLocation": "13964:12:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1630,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "13985:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1644,
                  "src": "13977:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1629,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13977:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1632,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "14006:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1644,
                  "src": "13993:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1631,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "13993:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13976:35:2"
            },
            "returnParameters": {
              "id": 1636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1635,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1644,
                  "src": "14030:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1634,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14030:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14029:14:2"
            },
            "scope": 1869,
            "src": "13955:173:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1663,
              "nodeType": "Block",
              "src": "14497:76:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1657,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1647,
                        "src": "14536:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1658,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1649,
                        "src": "14544:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "30",
                        "id": 1659,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "14550:1:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      {
                        "id": 1660,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1651,
                        "src": "14553:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1656,
                      "name": "functionCallWithValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1684,
                        1734
                      ],
                      "referencedDeclaration": 1734,
                      "src": "14514:21:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,uint256,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1661,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14514:52:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1655,
                  "id": 1662,
                  "nodeType": "Return",
                  "src": "14507:59:2"
                }
              ]
            },
            "documentation": {
              "id": 1645,
              "nodeType": "StructuredDocumentation",
              "src": "14134:211:2",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\n `errorMessage` as a fallback revert reason when `target` reverts.\n _Available since v3.1._"
            },
            "id": 1664,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCall",
            "nameLocation": "14359:12:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1647,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "14389:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "14381:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1646,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14381:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1649,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "14418:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "14405:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1648,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14405:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1651,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "14446:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "14432:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1650,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14432:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14371:93:2"
            },
            "returnParameters": {
              "id": 1655,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1654,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1664,
                  "src": "14483:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1653,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14483:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14482:14:2"
            },
            "scope": 1869,
            "src": "14350:223:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1683,
              "nodeType": "Block",
              "src": "15078:111:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1677,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1667,
                        "src": "15117:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1678,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1669,
                        "src": "15125:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1679,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1671,
                        "src": "15131:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564",
                        "id": 1680,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "15138:43:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_88a4a0b5e975840320a0475d4027005235904fdb5ece94df156f3d717cb2dbfc",
                          "typeString": "literal_string \"Address: low-level call with value failed\""
                        },
                        "value": "Address: low-level call with value failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_88a4a0b5e975840320a0475d4027005235904fdb5ece94df156f3d717cb2dbfc",
                          "typeString": "literal_string \"Address: low-level call with value failed\""
                        }
                      ],
                      "id": 1676,
                      "name": "functionCallWithValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1684,
                        1734
                      ],
                      "referencedDeclaration": 1734,
                      "src": "15095:21:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,uint256,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15095:87:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1675,
                  "id": 1682,
                  "nodeType": "Return",
                  "src": "15088:94:2"
                }
              ]
            },
            "documentation": {
              "id": 1665,
              "nodeType": "StructuredDocumentation",
              "src": "14579:351:2",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but also transferring `value` wei to `target`.\n Requirements:\n - the calling contract must have an ETH balance of at least `value`.\n - the called Solidity function must be `payable`.\n _Available since v3.1._"
            },
            "id": 1684,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCallWithValue",
            "nameLocation": "14944:21:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1667,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "14983:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1684,
                  "src": "14975:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1666,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "14975:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1669,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "15012:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1684,
                  "src": "14999:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1668,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14999:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1671,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "15034:5:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1684,
                  "src": "15026:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1670,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15026:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14965:80:2"
            },
            "returnParameters": {
              "id": 1675,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1674,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1684,
                  "src": "15064:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1673,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "15064:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15063:14:2"
            },
            "scope": 1869,
            "src": "14935:254:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1733,
              "nodeType": "Block",
              "src": "15616:321:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1705,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "arguments": [
                              {
                                "id": 1701,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967268,
                                "src": "15642:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Address_$1869",
                                  "typeString": "library Address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Address_$1869",
                                  "typeString": "library Address"
                                }
                              ],
                              "id": 1700,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "15634:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 1699,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "15634:7:2",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 1702,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "15634:13:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 1703,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "src": "15634:21:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "id": 1704,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1691,
                          "src": "15659:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "15634:30:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c",
                        "id": 1706,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "15666:40:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_565f1a77334fc4792800921178c71e4521acffab18ff9e7885b49377ee80ab4c",
                          "typeString": "literal_string \"Address: insufficient balance for call\""
                        },
                        "value": "Address: insufficient balance for call"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_565f1a77334fc4792800921178c71e4521acffab18ff9e7885b49377ee80ab4c",
                          "typeString": "literal_string \"Address: insufficient balance for call\""
                        }
                      ],
                      "id": 1698,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "15626:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15626:81:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1708,
                  "nodeType": "ExpressionStatement",
                  "src": "15626:81:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1711,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1687,
                            "src": "15736:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 1710,
                          "name": "isContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1593,
                          "src": "15725:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1712,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "15725:18:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374",
                        "id": 1713,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "15745:31:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_cc2e4e38850b7c0a3e942cfed89b71c77302df25bcb2ec297a0c4ff9ff6b90ad",
                          "typeString": "literal_string \"Address: call to non-contract\""
                        },
                        "value": "Address: call to non-contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_cc2e4e38850b7c0a3e942cfed89b71c77302df25bcb2ec297a0c4ff9ff6b90ad",
                          "typeString": "literal_string \"Address: call to non-contract\""
                        }
                      ],
                      "id": 1709,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "15717:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1714,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15717:60:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1715,
                  "nodeType": "ExpressionStatement",
                  "src": "15717:60:2"
                },
                {
                  "assignments": [
                    1717,
                    1719
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1717,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "15794:7:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1733,
                      "src": "15789:12:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1716,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "15789:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1719,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "15816:10:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1733,
                      "src": "15803:23:2",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1718,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "15803:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1726,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1724,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1689,
                        "src": "15856:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        ],
                        "expression": {
                          "id": 1720,
                          "name": "target",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1687,
                          "src": "15830:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 1721,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "src": "15830:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 1723,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "id": 1722,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1691,
                          "src": "15849:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "15830:25:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 1725,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15830:31:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "15788:73:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1728,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1717,
                        "src": "15896:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1729,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1719,
                        "src": "15905:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1730,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1693,
                        "src": "15917:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1727,
                      "name": "_verifyCallResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1868,
                      "src": "15878:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bool,bytes memory,string memory) pure returns (bytes memory)"
                      }
                    },
                    "id": 1731,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "15878:52:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1697,
                  "id": 1732,
                  "nodeType": "Return",
                  "src": "15871:59:2"
                }
              ]
            },
            "documentation": {
              "id": 1685,
              "nodeType": "StructuredDocumentation",
              "src": "15195:237:2",
              "text": " @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\n with `errorMessage` as a fallback revert reason when `target` reverts.\n _Available since v3.1._"
            },
            "id": 1734,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionCallWithValue",
            "nameLocation": "15446:21:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1687,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "15485:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1734,
                  "src": "15477:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1686,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15477:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1689,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "15514:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1734,
                  "src": "15501:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1688,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "15501:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1691,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "15536:5:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1734,
                  "src": "15528:13:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1690,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15528:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1693,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "15565:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1734,
                  "src": "15551:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1692,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15551:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15467:116:2"
            },
            "returnParameters": {
              "id": 1697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1696,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1734,
                  "src": "15602:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1695,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "15602:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15601:14:2"
            },
            "scope": 1869,
            "src": "15437:500:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1750,
              "nodeType": "Block",
              "src": "16214:97:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1745,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1737,
                        "src": "16250:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1746,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1739,
                        "src": "16258:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c207374617469632063616c6c206661696c6564",
                        "id": 1747,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "16264:39:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_90ec82aa826a536a4cbfae44ecfa384680faa9a4b77344bce96aa761ad904df0",
                          "typeString": "literal_string \"Address: low-level static call failed\""
                        },
                        "value": "Address: low-level static call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_90ec82aa826a536a4cbfae44ecfa384680faa9a4b77344bce96aa761ad904df0",
                          "typeString": "literal_string \"Address: low-level static call failed\""
                        }
                      ],
                      "id": 1744,
                      "name": "functionStaticCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1751,
                        1786
                      ],
                      "referencedDeclaration": 1786,
                      "src": "16231:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,string memory) view returns (bytes memory)"
                      }
                    },
                    "id": 1748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16231:73:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1743,
                  "id": 1749,
                  "nodeType": "Return",
                  "src": "16224:80:2"
                }
              ]
            },
            "documentation": {
              "id": 1735,
              "nodeType": "StructuredDocumentation",
              "src": "15943:166:2",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a static call.\n _Available since v3.3._"
            },
            "id": 1751,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionStaticCall",
            "nameLocation": "16123:18:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1740,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1737,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "16150:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1751,
                  "src": "16142:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1736,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16142:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1739,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "16171:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1751,
                  "src": "16158:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1738,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "16158:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16141:35:2"
            },
            "returnParameters": {
              "id": 1743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1742,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1751,
                  "src": "16200:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1741,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "16200:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16199:14:2"
            },
            "scope": 1869,
            "src": "16114:197:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1785,
              "nodeType": "Block",
              "src": "16653:229:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1765,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1754,
                            "src": "16682:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 1764,
                          "name": "isContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1593,
                          "src": "16671:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1766,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "16671:18:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a207374617469632063616c6c20746f206e6f6e2d636f6e7472616374",
                        "id": 1767,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "16691:38:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c79cc78e4f16ce3933a42b84c73868f93bb4a59c031a0acf576679de98c608a9",
                          "typeString": "literal_string \"Address: static call to non-contract\""
                        },
                        "value": "Address: static call to non-contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c79cc78e4f16ce3933a42b84c73868f93bb4a59c031a0acf576679de98c608a9",
                          "typeString": "literal_string \"Address: static call to non-contract\""
                        }
                      ],
                      "id": 1763,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "16663:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16663:67:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1769,
                  "nodeType": "ExpressionStatement",
                  "src": "16663:67:2"
                },
                {
                  "assignments": [
                    1771,
                    1773
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1771,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "16747:7:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1785,
                      "src": "16742:12:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1770,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "16742:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1773,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "16769:10:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1785,
                      "src": "16756:23:2",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1772,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "16756:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1778,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1776,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1756,
                        "src": "16801:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 1774,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1754,
                        "src": "16783:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 1775,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "staticcall",
                      "nodeType": "MemberAccess",
                      "src": "16783:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                      }
                    },
                    "id": 1777,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16783:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16741:65:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1780,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1771,
                        "src": "16841:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1781,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1773,
                        "src": "16850:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1782,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1758,
                        "src": "16862:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1779,
                      "name": "_verifyCallResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1868,
                      "src": "16823:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bool,bytes memory,string memory) pure returns (bytes memory)"
                      }
                    },
                    "id": 1783,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16823:52:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1762,
                  "id": 1784,
                  "nodeType": "Return",
                  "src": "16816:59:2"
                }
              ]
            },
            "documentation": {
              "id": 1752,
              "nodeType": "StructuredDocumentation",
              "src": "16317:173:2",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n but performing a static call.\n _Available since v3.3._"
            },
            "id": 1786,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionStaticCall",
            "nameLocation": "16504:18:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1759,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1754,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "16540:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1786,
                  "src": "16532:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1753,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "16532:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1756,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "16569:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1786,
                  "src": "16556:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1755,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "16556:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1758,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "16597:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1786,
                  "src": "16583:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1757,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16583:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16522:93:2"
            },
            "returnParameters": {
              "id": 1762,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1761,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1786,
                  "src": "16639:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1760,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "16639:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16638:14:2"
            },
            "scope": 1869,
            "src": "16495:387:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1802,
              "nodeType": "Block",
              "src": "17158:101:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1797,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1789,
                        "src": "17196:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 1798,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1791,
                        "src": "17204:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "hexValue": "416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564",
                        "id": 1799,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "17210:41:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9fdcd12e4b726339b32a442b0a448365d5d85c96b2d2cff917b4f66c63110398",
                          "typeString": "literal_string \"Address: low-level delegate call failed\""
                        },
                        "value": "Address: low-level delegate call failed"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9fdcd12e4b726339b32a442b0a448365d5d85c96b2d2cff917b4f66c63110398",
                          "typeString": "literal_string \"Address: low-level delegate call failed\""
                        }
                      ],
                      "id": 1796,
                      "name": "functionDelegateCall",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1803,
                        1838
                      ],
                      "referencedDeclaration": 1838,
                      "src": "17175:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (address,bytes memory,string memory) returns (bytes memory)"
                      }
                    },
                    "id": 1800,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17175:77:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1795,
                  "id": 1801,
                  "nodeType": "Return",
                  "src": "17168:84:2"
                }
              ]
            },
            "documentation": {
              "id": 1787,
              "nodeType": "StructuredDocumentation",
              "src": "16888:168:2",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n but performing a delegate call.\n _Available since v3.4._"
            },
            "id": 1803,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionDelegateCall",
            "nameLocation": "17070:20:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1789,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "17099:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1803,
                  "src": "17091:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1788,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17091:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1791,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "17120:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1803,
                  "src": "17107:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1790,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17107:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17090:35:2"
            },
            "returnParameters": {
              "id": 1795,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1794,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1803,
                  "src": "17144:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1793,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17144:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17143:14:2"
            },
            "scope": 1869,
            "src": "17061:198:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1837,
              "nodeType": "Block",
              "src": "17600:233:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 1817,
                            "name": "target",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1806,
                            "src": "17629:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 1816,
                          "name": "isContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1593,
                          "src": "17618:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 1818,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "17618:18:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374",
                        "id": 1819,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "17638:40:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b94ded0918034cf8f896e19fa3cfdef1188cd569c577264a3622e49152f88520",
                          "typeString": "literal_string \"Address: delegate call to non-contract\""
                        },
                        "value": "Address: delegate call to non-contract"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b94ded0918034cf8f896e19fa3cfdef1188cd569c577264a3622e49152f88520",
                          "typeString": "literal_string \"Address: delegate call to non-contract\""
                        }
                      ],
                      "id": 1815,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "17610:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 1820,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17610:69:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1821,
                  "nodeType": "ExpressionStatement",
                  "src": "17610:69:2"
                },
                {
                  "assignments": [
                    1823,
                    1825
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1823,
                      "mutability": "mutable",
                      "name": "success",
                      "nameLocation": "17696:7:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1837,
                      "src": "17691:12:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1822,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "17691:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1825,
                      "mutability": "mutable",
                      "name": "returndata",
                      "nameLocation": "17718:10:2",
                      "nodeType": "VariableDeclaration",
                      "scope": 1837,
                      "src": "17705:23:2",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 1824,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "17705:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 1830,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 1828,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1808,
                        "src": "17752:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "id": 1826,
                        "name": "target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1806,
                        "src": "17732:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 1827,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "delegatecall",
                      "nodeType": "MemberAccess",
                      "src": "17732:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_baredelegatecall_nonpayable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes memory) returns (bool,bytes memory)"
                      }
                    },
                    "id": 1829,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17732:25:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "17690:67:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1832,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1823,
                        "src": "17792:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "id": 1833,
                        "name": "returndata",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1825,
                        "src": "17801:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      {
                        "id": 1834,
                        "name": "errorMessage",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1810,
                        "src": "17813:12:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1831,
                      "name": "_verifyCallResult",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1868,
                      "src": "17774:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bool_$_t_bytes_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bool,bytes memory,string memory) pure returns (bytes memory)"
                      }
                    },
                    "id": 1835,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "17774:52:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "functionReturnParameters": 1814,
                  "id": 1836,
                  "nodeType": "Return",
                  "src": "17767:59:2"
                }
              ]
            },
            "documentation": {
              "id": 1804,
              "nodeType": "StructuredDocumentation",
              "src": "17265:175:2",
              "text": " @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n but performing a delegate call.\n _Available since v3.4._"
            },
            "id": 1838,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "functionDelegateCall",
            "nameLocation": "17454:20:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1806,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "17492:6:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1838,
                  "src": "17484:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1805,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17484:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1808,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "17521:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1838,
                  "src": "17508:17:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1807,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17508:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1810,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "17549:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1838,
                  "src": "17535:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1809,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17535:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17474:93:2"
            },
            "returnParameters": {
              "id": 1814,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1813,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1838,
                  "src": "17586:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1812,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17586:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17585:14:2"
            },
            "scope": 1869,
            "src": "17445:388:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1867,
              "nodeType": "Block",
              "src": "17999:532:2",
              "statements": [
                {
                  "condition": {
                    "id": 1849,
                    "name": "success",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1840,
                    "src": "18013:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 1865,
                    "nodeType": "Block",
                    "src": "18070:455:2",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1856,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 1853,
                              "name": "returndata",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1842,
                              "src": "18154:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 1854,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "18154:17:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 1855,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "18174:1:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "18154:21:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 1863,
                          "nodeType": "Block",
                          "src": "18462:53:2",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 1860,
                                    "name": "errorMessage",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1844,
                                    "src": "18487:12:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "id": 1859,
                                  "name": "revert",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [
                                    4294967277,
                                    4294967277
                                  ],
                                  "referencedDeclaration": 4294967277,
                                  "src": "18480:6:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                                    "typeString": "function (string memory) pure"
                                  }
                                },
                                "id": 1861,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "18480:20:2",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 1862,
                              "nodeType": "ExpressionStatement",
                              "src": "18480:20:2"
                            }
                          ]
                        },
                        "id": 1864,
                        "nodeType": "IfStatement",
                        "src": "18150:365:2",
                        "trueBody": {
                          "id": 1858,
                          "nodeType": "Block",
                          "src": "18177:279:2",
                          "statements": [
                            {
                              "AST": {
                                "nodeType": "YulBlock",
                                "src": "18297:145:2",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "18319:40:2",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "returndata",
                                          "nodeType": "YulIdentifier",
                                          "src": "18348:10:2"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "18342:5:2"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "18342:17:2"
                                    },
                                    "variables": [
                                      {
                                        "name": "returndata_size",
                                        "nodeType": "YulTypedName",
                                        "src": "18323:15:2",
                                        "type": ""
                                      }
                                    ]
                                  },
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "kind": "number",
                                              "nodeType": "YulLiteral",
                                              "src": "18391:2:2",
                                              "type": "",
                                              "value": "32"
                                            },
                                            {
                                              "name": "returndata",
                                              "nodeType": "YulIdentifier",
                                              "src": "18395:10:2"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "18387:3:2"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "18387:19:2"
                                        },
                                        {
                                          "name": "returndata_size",
                                          "nodeType": "YulIdentifier",
                                          "src": "18408:15:2"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "revert",
                                        "nodeType": "YulIdentifier",
                                        "src": "18380:6:2"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "18380:44:2"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "18380:44:2"
                                  }
                                ]
                              },
                              "evmVersion": "london",
                              "externalReferences": [
                                {
                                  "declaration": 1842,
                                  "isOffset": false,
                                  "isSlot": false,
                                  "src": "18348:10:2",
                                  "valueSize": 1
                                },
                                {
                                  "declaration": 1842,
                                  "isOffset": false,
                                  "isSlot": false,
                                  "src": "18395:10:2",
                                  "valueSize": 1
                                }
                              ],
                              "id": 1857,
                              "nodeType": "InlineAssembly",
                              "src": "18288:154:2"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "id": 1866,
                  "nodeType": "IfStatement",
                  "src": "18009:516:2",
                  "trueBody": {
                    "id": 1852,
                    "nodeType": "Block",
                    "src": "18022:42:2",
                    "statements": [
                      {
                        "expression": {
                          "id": 1850,
                          "name": "returndata",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1842,
                          "src": "18043:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "functionReturnParameters": 1848,
                        "id": 1851,
                        "nodeType": "Return",
                        "src": "18036:17:2"
                      }
                    ]
                  }
                }
              ]
            },
            "id": 1868,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_verifyCallResult",
            "nameLocation": "17848:17:2",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1840,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "17880:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1868,
                  "src": "17875:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 1839,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "17875:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1842,
                  "mutability": "mutable",
                  "name": "returndata",
                  "nameLocation": "17910:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1868,
                  "src": "17897:23:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1841,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17897:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1844,
                  "mutability": "mutable",
                  "name": "errorMessage",
                  "nameLocation": "17944:12:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1868,
                  "src": "17930:26:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1843,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17930:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17865:97:2"
            },
            "returnParameters": {
              "id": 1848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1847,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1868,
                  "src": "17985:12:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 1846,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17985:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17984:14:2"
            },
            "scope": 1869,
            "src": "17839:692:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "scope": 1870,
        "src": "11015:7518:2",
        "usedErrors": []
      }
    ],
    "src": "39:18495:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.7+commit.e28d00a7.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2022-01-31T05:25:12.896Z",
  "devdoc": {
    "events": {
      "Approval(address,address,uint256)": {
        "details": "Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance."
      },
      "Transfer(address,address,uint256)": {
        "details": "Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero."
      }
    },
    "kind": "dev",
    "methods": {
      "allowance(address,address)": {
        "details": "Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called."
      },
      "approve(address,uint256)": {
        "details": "Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event."
      },
      "balanceOf(address)": {
        "details": "Returns the amount of tokens owned by `account`."
      },
      "totalSupply()": {
        "details": "Returns the amount of tokens in existence."
      },
      "transfer(address,uint256)": {
        "details": "Moves `amount` tokens from the caller's account to `recipient`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
      },
      "transferFrom(address,address,uint256)": {
        "details": "Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}