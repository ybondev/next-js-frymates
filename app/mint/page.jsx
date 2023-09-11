"use client";
import { useEffect, useState, useRef } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Image from "next/image";
import { toast } from "react-hot-toast";
import {
  useAddress,
  useMetamask,
  useContract,
  useNetworkMismatch,
  useNetwork,
  ChainId,
  ConnectWallet,
} from "@thirdweb-dev/react";
import { Web3 } from "web3";
import Loading from "@app/loading";

const Mint = () => {
  const address = useAddress();
  const isWrongNetwork = useNetworkMismatch();
  const [, swtichNetwork] = useNetwork();
  const [mintAmount, setMintAmount] = useState(1);
  const [totalSupply, setTotalSupply] = useState(0);
  const [claiming, setClaiming] = useState(false);

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount <= 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = async () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  const { contract } = useContract(
    "0x24305eFFBF3506b826f904C9e0017b9A247f8A97"
  );

  const MINT = async () => {
    if (isWrongNetwork) {
      swtichNetwork && swtichNetwork(ChainId.Mainnet);
      return;
    }

    setClaiming(true);
    try {
      const cost = await contract?.call("cost");
      const bigwei = BigInt(cost);
      const wei = (Number(bigwei) / 10 ** 18) * mintAmount;
      const val = Web3.utils.toWei(wei, "ether");
      const data = await contract?.call(
        "mint", // Name of your function as it is on the smart contract
        [
          mintAmount, // e.g. Argument 1
        ],
        {
          gasLimit: 3000000, // override default gas limit
          value: val, // send 0.1 ether with the contract call
        }
      );
      toast.success("Minted Successfully!", data);
      setClaiming(false);
    } catch (err) {
      console.error("Contract call failure!", err);
      setClaiming(false);
    }
  };

  const TOTAL_SUPPLY = async () => {
    try {
      const data = await contract.call("totalSupply");
      setTotalSupply(Number(data));
    } catch (error) {}
  };

  useEffect(() => {
    TOTAL_SUPPLY();
  });

  return (
    <section className="container-fluid mint_section">
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-6">
            <h1>Get Ready to Mint Awesome NFTs</h1>
            <p>
              FRYMATES ARE 10,000 UNIQUE COLLECTIBLE NFTs WITH PROOF OF
              OWNERSHIP STORED ON THE <span>ETHEREUM BLOCKCHAIN.</span>
            </p>
            <div className="total_supply">
              <span id="total"></span>
              <span>{totalSupply}/10000</span>
            </div>
            <div className="quantity_container">
              <div className="quantity">
                <FaMinus className="fa_icon" onClick={decrementMintAmount} />
              </div>
              <div className="quantity number">{mintAmount}</div>
              <div className="quantity">
                <FaPlus className="fa_icon" onClick={incrementMintAmount} />
              </div>
              {address === undefined ? (
                // <button id="mint" onClick={() => connectMetamask()}>
                //   connect
                // </button>
                <ConnectWallet />
              ) : (
                <button
                  id="mint"
                  onClick={MINT}
                  className={claiming ? "claiming" : ""}
                >
                  {claiming ? "Claiming..." : "Mint"}
                </button>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="right_col">
              <Image
                src={"./assets/frymates.gif"}
                width={500}
                height={0}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mint;
