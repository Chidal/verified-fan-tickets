pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract VerifiedFanTickets is ERC721, ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;
    address public verifierContract;

    constructor(address _verifierContract) ERC721("VerifiedFanTicket", "VFT") Ownable(msg.sender) {
        verifierContract = _verifierContract;
    }

    function mintTicket(address to, string memory tokenURI, bytes memory proof, bytes32 input) external {
        require(FanCredentialVerifier(verifierContract).verifyProof(proof, input), "Invalid fan proof");
        _tokenIdCounter += 1;
        uint256 tokenId = _tokenIdCounter;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize) internal override {
        require(from == address(0), "Tickets are soulbound");
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}