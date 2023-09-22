'use client';
import { ThemeProvider } from 'styled-components';
import {
  InfoContainer,
  MainContainer,
  MainContent,
  MenuContainer,
  Outline,
  PhotoContainer,
  Content,
  ColorPicker,
} from './mainElements';
import { altTheme, darkTheme, lightTheme } from '@/app/styles/themes';
import Image from 'next/image';
import profilePic from 'public/profilePic.jpg';
import { getContent, sideOptions } from '@/app/data/utils';
import { useState } from 'react';

export const MainScreen = () => {
  const [selectedOption, setSelectedOption] = useState('front');

  const [loaded, setLoaded] = useState(false);

  const loadContent = () => {
    return getContent(`${selectedOption}`);
  };

  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <ColorPicker>
          <span className="square c1" onClick={() => setTheme(darkTheme)} />
          <span className="square c3" onClick={() => setTheme(altTheme)} />
          <span className="square c2" onClick={() => setTheme(lightTheme)} />
        </ColorPicker>
        <Outline>
          <MainContent>
            <InfoContainer>
              <Content>
                <div className={loaded ? 'loaded' : ''}>{loadContent()}</div>
              </Content>
              <PhotoContainer>
                <Image
                  alt="Profile Pic"
                  src={profilePic}
                  style={{ maxWidth: '100px', height: 'auto' }}
                ></Image>
                <h1>Ricardo Campelo</h1>
                <p>Desarrollador web</p>
              </PhotoContainer>
            </InfoContainer>
            <MenuContainer
              className={selectedOption === 'front' ? '' : 'resize'}
            >
              <ul className={selectedOption === 'front' ? '' : 'resize'}>
                {sideOptions.map((item) => (
                  <li
                    className={
                      selectedOption === item.content ? 'selected' : ''
                    }
                    key={item.content}
                    onClick={() => {
                      setSelectedOption(item.content);
                      setLoaded(false);
                    }}
                  >
                    {item.option}
                  </li>
                ))}
              </ul>
            </MenuContainer>
          </MainContent>
        </Outline>
      </MainContainer>
    </ThemeProvider>
  );
};
