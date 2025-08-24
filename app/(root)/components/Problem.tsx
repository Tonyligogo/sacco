import Image from "next/image";
import Accountant from '@/public/woman.jpg'
import { HeartCrack, Layers, TriangleAlert } from "lucide-react";

const Problem = () => {
  return (
    <div className="bg-primary-foreground px-4 py-16 md:p-16">
      <p className="text-primary font-bold text-center">
        Problem
      </p>
      <p className="text-primary text-center mt-2 mb-8 font-bold text-3xl md:max-w-md md:mx-auto">
        SACCOs Deserve Better Than Spreadsheets
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
      <div className="flex-1 border">
            <Image src={Accountant} alt='frustarated accountant' height={500} className="w-full h-[500px] object-cover rounded-xl" />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <div className="bg-white flex flex-col md:flex-row md:items-center gap-5 rounded-xl p-6">
            <div className="size-14 flex-shrink-0  bg-secondary rounded-full grid place-content-center">
            <Layers className="size-8 text-primary" />
            </div>
            <div>
                <p className="leading-none text-primary font-bold text-xl">
                Drowning in Manual Work
                </p>
                <p className="pt-2 text-primary">
                SACCO treasurers spend 15+ hours weekly on manual bookkeeping, loan tracking, and member record updates
                </p>
            </div>
          </div>
          <div className="bg-white flex flex-col md:flex-row md:items-center gap-5 rounded-xl p-6">
            <div className="size-14 flex-shrink-0  bg-secondary rounded-full grid place-content-center">
            <TriangleAlert className="size-8 text-primary" />
            </div>
            <div>
                <p className="leading-none text-primary font-bold text-xl">
                Costly Mistakes & Audit Issues
                </p>
                <p className="pt-2 text-primary">
                Manual calculations lead to interest errors, missed payments, and reconciliation nightmares.
                </p>
            </div>
          </div>
          <div className="bg-white flex flex-col md:flex-row md:items-center gap-5 rounded-xl p-6">
            <div className="size-14 flex-shrink-0 bg-secondary rounded-full grid place-content-center">
            <HeartCrack className="size-8 text-primary" />
            </div>
            <div>
                <p className="leading-none text-primary font-bold text-xl">
                Member dissatisfaction
                </p>
                <p className="pt-2 text-primary">
                Members lack instant access to their balances, loan status, and payment due dates.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
