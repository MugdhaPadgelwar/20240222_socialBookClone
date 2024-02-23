import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'faceblike_clone';
  darkMode: boolean = false;

  shortcuts: { img: string; title: string }[] = [
    {
      img: 'https://i.postimg.cc/3JHVf7vG/shortcut-1.png',
      title: 'Mugdha Padgelwar',
    },
    {
      img: 'https://i.postimg.cc/rFCbvb1P/shortcut-2.png',
      title: 'Web Design Course',
    },
    {
      img: 'https://i.postimg.cc/0yk3xfZ2/shortcut-3.png',
      title: 'Full Stack Development',
    },
    {
      img: 'https://i.postimg.cc/Z5wQqdDP/shortcut-4.png',
      title: 'Website Expert',
    },
  ];
  onlineMembers: {
    status: string;
    img: string;
    fname: string;
    lname: string;
  }[] = [
    {
      status: 'online',
      img: 'https://i.postimg.cc/XNPtfdVs/member-1.png',
      fname: 'Mugdha',
      lname: 'Padgelwar',
    },
    {
      status: 'online',
      img: 'https://i.postimg.cc/4NhqByys/member-2.png',
      fname: 'Jackson',
      lname: 'Aston',
    },
    {
      status: 'online',
      img: 'https://i.postimg.cc/FH5qqvkc/member-3.png',
      fname: 'Samona',
      lname: 'Rose',
    },
    {
      status: 'online',
      img: 'https://i.postimg.cc/Sx65bPcP/member-4.png',
      fname: 'Mike',
      lname: 'Pérez',
    },
  ];

  events: { date: number; month: string; event: string; address: string }[] = [
    {
      date: 29,
      month: 'February',
      event: 'Open Mic Night',
      address: 'Align Hub',
    },
    {
      date: 12,
      month: 'March',
      event: 'Bollywood Special',
      address: 'Hard Rock Cafe, Hitech City, Hyderabad',
    },
  ];

  stories: { image: string; name: string }[] = [
    { image: 'https://i.postimg.cc/TPh453Zz/upload.png', name: 'Post Story' },
    { image: 'https://i.postimg.cc/XNPtfdVs/member-1.png', name: 'Mugdha' },
    { image: 'https://i.postimg.cc/4NhqByys/member-2.png', name: 'Jackson' },
    { image: 'https://i.postimg.cc/FH5qqvkc/member-3.png', name: 'Samona' },
    { image: 'https://i.postimg.cc/Sx65bPcP/member-4.png', name: 'John Doe' },
  ];

  posts: {
    profile_image: string;
    fname: string;
    lname: string;
    timestamp: string;
    caption: string;
    post_image: string;
    post_comment_count: number;
    post_like_count: number;
    post_share_count: number;
  }[] = [
    {
      profile_image: 'https://i.postimg.cc/cHg22LhR/profile-pic.png',
      fname: 'John',
      lname: 'Nicholson',
      timestamp: 'June 24 2021, 13:40 pm',
      caption:
        'Subscribe Vkive Tutorials Youtube Channel to watch more videos on website development and UI designs.',
      post_image:
        'https://media.gcflearnfree.org/content/588f55e5a0b0042cb858653b_01_30_2017/images_stock_puppy.jpg',
      post_comment_count: 45,
      post_like_count: 120,
      post_share_count: 20,
    },
    {
      profile_image: 'https://i.postimg.cc/cHg22LhR/profile-pic.png',
      fname: 'John',
      lname: 'Nicholson',
      timestamp: 'June 24 2021, 13:40 pm',
      caption:
        'Subscribe Vkive Tutorials Youtube Channel to watch more videos on website development and UI designs.',
      post_image:
        'https://media.gcflearnfree.org/content/588f55e5a0b0042cb858653b_01_30_2017/images_quality_anchor.jpg',
      post_comment_count: 45,
      post_like_count: 120,
      post_share_count: 20,
    },

    {
      profile_image: 'https://i.postimg.cc/cHg22LhR/profile-pic.png',
      fname: 'John',
      lname: 'Nicholson',
      timestamp: 'June 24 2021, 13:40 pm',
      caption:
        'Subscribe Vkive Tutorials Youtube Channel to watch more videos on website development and UI designs.',
      post_image:
        'https://images.unsplash.com/photo-1700208505264-2e3067a3fc9c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      post_comment_count: 45,
      post_like_count: 120,
      post_share_count: 20,
    },
    {
      profile_image: 'https://i.postimg.cc/cHg22LhR/profile-pic.png',
      fname: 'John',
      lname: 'Nicholson',
      timestamp: 'June 24 2021, 13:40 pm',
      caption:
        'Subscribe Vkive Tutorials Youtube Channel to watch more videos on website development and UI designs.',
      post_image:
        'https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      post_comment_count: 45,
      post_like_count: 120,
      post_share_count: 20,
    },
    {
      profile_image: 'https://i.postimg.cc/cHg22LhR/profile-pic.png',
      fname: 'John',
      lname: 'Nicholson',
      timestamp: 'June 24 2021, 13:40 pm',
      caption:
        'Subscribe Vkive Tutorials Youtube Channel to watch more videos on website development and UI designs.',
      post_image:
        'https://images.unsplash.com/photo-1708481736382-af81348e8b57?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      post_comment_count: 45,
      post_like_count: 120,
      post_share_count: 20,
    },
  ];

  user: { fname: string; lname: string; image: string } = {
    fname: 'Mugdha',
    lname: 'Padgelwar',
    image: 'https://i.postimg.cc/cHg22LhR/profile-pic.png',
  };
}
