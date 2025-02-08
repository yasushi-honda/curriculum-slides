'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

interface SlideProps {
  title: string;
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ title, children }) => (
  <Card className="w-full h-full bg-card shadow-lg border-border relative backdrop-blur-sm">
    <CardHeader className="text-center pb-4">
      <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="relative z-10">
      {children}
    </CardContent>
    <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/20 to-background/50 rounded-lg -z-0" />
  </Card>
);

const ContentBox = ({ children, className = "" }) => (
  <div className={`p-4 bg-card/40 rounded-lg border border-border/50 shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-card/60 ${className}`}>
    {children}
  </div>
);

const SlideDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "生成AI活用入門",
      content: (
        <div className="space-y-6">
          <ContentBox className="text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">情報系専門学校初学者向けカリキュラム</h2>
            <p className="text-muted-foreground text-lg">2025年2月版</p>
          </ContentBox>
        </div>
      )
    },
    {
      title: "1. カリキュラム概要",
      content: (
        <div className="space-y-6">
          <ContentBox>
            <h3 className="text-lg font-bold mb-2 text-primary">目的</h3>
            <p className="text-muted-foreground">生成AIの基礎知識と実践スキルを習得</p>
          </ContentBox>
          <ContentBox>
            <h3 className="text-lg font-bold mb-2 text-primary">特徴</h3>
            <ul className="list-none space-y-3">
              <li className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                実践重視 (演習、失敗体験の共有)
              </li>
              <li className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                能動的な学習を促進
              </li>
              <li className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                対象: 情報系専門学校生
              </li>
              <li className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                教育プロセス下地がないことを前提
              </li>
            </ul>
          </ContentBox>
        </div>
      )
    },
    {
      title: "2. 教育目標",
      content: (
        <div className="space-y-4">
          <ContentBox>
            <ul className="space-y-4">
              {[
                "AIの基本原理と仕組みを理解",
                "効果的なプロンプト作成と問題解決",
                "AIツールの実践的活用方法の習得",
                "AIを活用した開発プロセスの理解",
                "倫理的配慮とAIの限界の認識"
              ].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </ContentBox>
        </div>
      )
    },
    {
      title: "3. カリキュラム前期",
      content: (
        <div className="space-y-6">
          <ContentBox>
            <p className="font-semibold text-lg text-primary mb-4">AIとの対話と基礎概念</p>
            <div className="grid gap-4">
              {[
                {
                  title: "Week 1-5: AIの基礎と対話",
                  desc: "プロンプト、問題解決、情報整理"
                },
                {
                  title: "Week 6-10: コード生成とGit",
                  desc: "テスト、リファクタリング、バージョン管理"
                },
                {
                  title: "Week 11-15: Web基礎とAIリテラシー",
                  desc: "アーキテクチャ、倫理、著作権"
                }
              ].map((week, index) => (
                <div key={index} className="p-4 bg-background/50 rounded-lg border border-border/50 hover:bg-background/70 transition-colors">
                  <p className="font-medium text-primary">{week.title}</p>
                  <p className="text-sm text-muted-foreground">{week.desc}</p>
                </div>
              ))}
            </div>
          </ContentBox>
        </div>
      )
    },
    {
      title: "4. カリキュラム後期",
      content: (
        <div className="space-y-6">
          <ContentBox>
            <p className="font-semibold text-lg text-primary mb-4">実践的活用とプロジェクト体験</p>
            <div className="grid gap-4">
              {[
                {
                  title: "Week 1-5: プロジェクト設計とAPI",
                  desc: "要件定義、データベース設計、API連携"
                },
                {
                  title: "Week 6-10: 実践開発",
                  desc: "Webアプリ開発、クラウドデプロイ"
                },
                {
                  title: "Week 11-15: 倫理と総まとめ",
                  desc: "情報モラル、最終発表、振り返り"
                }
              ].map((week, index) => (
                <div key={index} className="p-4 bg-background/50 rounded-lg border border-border/50 hover:bg-background/70 transition-colors">
                  <p className="font-medium text-primary">{week.title}</p>
                  <p className="text-sm text-muted-foreground">{week.desc}</p>
                </div>
              ))}
            </div>
          </ContentBox>
        </div>
      )
    },
    {
      title: "5. 評価方法",
      content: (
        <div className="space-y-6">
          <ContentBox>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { percent: "30%", label: "理解度テスト", color: "from-blue-500" },
                { percent: "40%", label: "実践課題", color: "from-green-500" },
                { percent: "30%", label: "最終プロジェクト", color: "from-purple-500" }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background rounded-lg transition-opacity group-hover:opacity-100 opacity-0" />
                  <div className="p-4 bg-card/40 rounded-lg border border-border/50 relative">
                    <p className="font-bold text-2xl mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {item.percent}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-primary mb-3">評価ポイント</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "AIツールの適切な活用",
                  "問題解決アプローチ",
                  "チームワーク",
                  "プロジェクト完成度",
                  "ドキュメンテーション"
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </ContentBox>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="min-h-screen bg-background p-4 md:p-8 lg:p-12 relative overflow-hidden">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="container mx-auto max-w-4xl relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Slide
              title={slides[currentSlide].title}
            >
              {slides[currentSlide].content}
            </Slide>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={prevSlide}
            className="group hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            前へ
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={nextSlide}
            className="group hover:bg-primary hover:text-primary-foreground"
          >
            次へ
            <ChevronRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-primary scale-125'
                  : 'bg-primary/20 hover:bg-primary/40'
              }`}
              aria-label={`スライド${index + 1}へ移動`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default SlideDeck;
