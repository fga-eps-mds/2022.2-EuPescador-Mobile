import wikiService from './wikiService';

async function GetOneWikiFish(fish_id: string) {
  const res = await wikiService.get(`/fishWiki/${fish_id}?mobile=true`);

  return res.data;
}

export {GetOneWikiFish};
