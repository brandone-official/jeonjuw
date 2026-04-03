import React from 'react';

export default function Terms() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-navy-900 mb-4">이용약관</h1>
        <div className="w-12 h-1 bg-navy-800"></div>
      </div>
      
      <div className="space-y-8 text-navy-700 leading-relaxed text-sm md:text-base">
        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">제1조 (목적)</h2>
          <p>
            이 약관은 전주W한의원(이하 "본원")이 운영하는 웹사이트(이하 "사이트")에서 제공하는 인터넷 관련 서비스(이하 "서비스")를 이용함에 있어 본원과 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">제2조 (정의)</h2>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>"사이트"란 본원이 정보를 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 설정한 가상의 영업장을 말합니다.</li>
            <li>"이용자"란 "사이트"에 접속하여 이 약관에 따라 "사이트"가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">제3조 (약관의 명시와 개정)</h2>
          <p>
            본원은 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자등록번호, 연락처 등을 이용자가 알 수 있도록 사이트의 초기 서비스 화면에 게시합니다. 본원은 약관의 규제 등에 관한 법률, 전자거래기본법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">제4조 (서비스의 제공 및 변경)</h2>
          <p>
            본원은 사이트를 통해 다음과 같은 업무를 수행합니다.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>의료 정보 및 본원 소개 정보 제공</li>
            <li>진료 예약 및 상담 신청 서비스</li>
            <li>기타 본원이 정하는 업무</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">제5조 (서비스의 중단)</h2>
          <p>
            본원은 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">제6조 (이용자의 의무)</h2>
          <p>
            이용자는 다음 행위를 하여서는 안 됩니다.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>신청 또는 변경 시 허위내용의 등록</li>
            <li>사이트에 게시된 정보의 변경</li>
            <li>본원이 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시</li>
            <li>본원 및 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
            <li>본원 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
