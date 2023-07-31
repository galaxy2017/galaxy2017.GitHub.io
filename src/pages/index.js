/*
 * @Author: onmyoji onmyoji@qq.com
 * @Date: 2023-01-05 23:00:12
 * @LastEditors: onmyoji onmyoji@qq.com
 * @LastEditTime: 2023-03-26 15:01:46
 * @FilePath: \docsLuomoeCom\src\pages\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            查看笔记
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      // keywords="胖螺,JavaScript,python,tensorflow,nvidia"
      // description="胖螺的博客,目前专注于云计算、边缘计算与人工智能"
      >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <img src='https://music.up.cdn.nahida.cn/cover/raiden2.png' style={{width:'100%'}}></img>
        <img src='https://music.up.cdn.nahida.cn/cover/raiden1.png' style={{width:'100%'}}></img>
      </main>
    </Layout>
  );
}
