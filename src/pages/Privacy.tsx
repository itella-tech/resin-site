import React from 'react';
import { ScrollToTop } from '../components/ScrollToTop';

const Privacy: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-12">
          プライバシーポリシー
        </h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. 個人情報の収集について
          </h2>
          <p className="mb-4">
            当サイトでは、お問い合わせやサービスのご利用の際に、お名前、メールアドレス等の個人情報をご登録いただく場合がございます。
            これらの個人情報は、質問に対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、
            個人情報をご提供いただく際の目的以外では利用いたしません。
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. 個人情報の第三者への開示
          </h2>
          <p className="mb-4">
            当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>本人のご了解がある場合</li>
            <li>法令等への協力のため、開示が必要となる場合</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. 個人情報の安全管理
          </h2>
          <p className="mb-4">
            当サイトでは、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            4. プライバシーポリシーの変更について
          </h2>
          <p className="mb-4">
            当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直しおよび改善していきます。
            修正された最新のプライバシーポリシーは常に本ページにて開示されます。
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. お問い合わせ
          </h2>
          <p className="mb-4">
            当サイトの個人情報の取扱に関するお問い合わせは下記までご連絡ください。
          </p>
          <p className="mb-4">
            Email: d.hatoma+resin@itella.tech
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy; 